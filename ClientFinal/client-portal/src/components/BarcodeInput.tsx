import { useState, useRef, useCallback, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Camera, Upload, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DEBUG = false;
function log(...args: unknown[]) {
  if (DEBUG) console.log('[BarcodeInput]', ...args);
}

function logCameraError(err: unknown): void {
  const e = err as { name?: string; message?: string };
  if (e?.name === 'NotAllowedError') {
    console.warn('[BarcodeInput] Camera permission denied:', e.message);
  } else if (e?.name === 'NotFoundError') {
    console.warn('[BarcodeInput] No camera found:', e.message);
  } else if (e?.name === 'NotReadableError') {
    console.warn('[BarcodeInput] Camera in use or not readable:', e.message);
  } else if (err) {
    console.warn('[BarcodeInput] getUserMedia error:', err);
  }
}

function isSecureContext(): boolean {
  return typeof window !== 'undefined' && (window.isSecureContext ?? (location.protocol === 'https:' || location.hostname === 'localhost'));
}

export interface BarcodeInputProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
}

function getCameraErrorMessage(err: unknown): string {
  if (!err || typeof err !== 'object') return 'تعذر الوصول إلى الكاميرا. يمكنك رفع صورة أو إدخال الرمز يدوياً.';
  const e = err as { name?: string; message?: string };
  if (e.name === 'NotAllowedError' || e.message?.includes('Permission'))
    return 'تم رفض إذن الكاميرا. يرجى السماح بالوصول في إعدادات المتصفح، أو ارفع صورة الباركود، أو أدخل الرمز يدوياً.';
  if (e.name === 'NotFoundError') return 'لم يتم العثور على كاميرا. يمكنك رفع صورة الباركود أو إدخال الرمز يدوياً.';
  if (e.name === 'NotReadableError') return 'الكاميرا قيد الاستخدام من تطبيق آخر. جرّب إغلاق التطبيقات الأخرى، أو ارفع صورة الباركود، أو أدخل الرمز يدوياً.';
  if (e.message) log('Camera error:', e.message);
  return 'تعذر الوصول إلى الكاميرا. يمكنك رفع صورة الباركود أو إدخال الرمز يدوياً.';
}

function getImageErrorMessage(err: unknown, fallback: string): string {
  if (!err || typeof err !== 'object') return fallback;
  const e = err as { message?: string };
  if (e.message?.toLowerCase().includes('not found') || e.message?.toLowerCase().includes('no barcode'))
    return 'لم يتم العثور على باركود في الصورة.';
  if (e.message?.toLowerCase().includes('format') || e.message?.toLowerCase().includes('unsupported'))
    return 'الباركود غير مدعوم أو تنسيق غير معروف.';
  if (e.message?.toLowerCase().includes('checksum'))
    return 'الصورة غير واضحة أو الباركود تالف.';
  log('Image decode error:', e.message);
  return fallback;
}

export function BarcodeInput({
  value,
  onChange,
  id = 'barcode-input',
  placeholder = 'رمز الباركود أو امسح/ارفع صورة',
  disabled = false,
}: BarcodeInputProps) {
  const [scanOpen, setScanOpen] = useState(false);
  const [requestingCamera, setRequestingCamera] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const controlsRef = useRef<{ stop: () => void } | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = useCallback(() => {
    try {
      controlsRef.current?.stop();
      controlsRef.current = null;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      BrowserMultiFormatReader.releaseAllStreams();
      const video = videoRef.current;
      if (video?.srcObject) {
        video.srcObject = null;
      }
    } catch (e) {
      log('Stop camera error:', e);
    }
  }, []);

  const handleCloseScan = useCallback(() => {
    stopCamera();
    setScanOpen(false);
    setScanError(null);
    setRequestingCamera(false);
  }, [stopCamera]);

  useEffect(() => {
    if (!scanOpen) {
      stopCamera();
      return;
    }
    return () => stopCamera();
  }, [scanOpen, stopCamera]);

  const startCameraScan = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    setScanError(null);
    setRequestingCamera(true);

    if (!isSecureContext()) {
      setRequestingCamera(false);
      setScanError('الكاميرا تعمل فقط على HTTPS أو localhost. يرجى استخدام رابط آمن أو رفع صورة الباركود أو إدخال الرمز يدوياً.');
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      setRequestingCamera(false);
      setScanError('المتصفح لا يدعم الوصول إلى الكاميرا. يمكنك رفع صورة الباركود أو إدخال الرمز يدوياً.');
      return;
    }

    stopCamera();

    const constraints: MediaStreamConstraints = {
      video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
    };

    try {
      log('Requesting camera permission with getUserMedia...');
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      video.srcObject = stream;
      video.setAttribute('autoplay', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      await video.play();

      setRequestingCamera(false);
      log('Camera stream attached and playing, starting barcode decoder');

      const codeReader = new BrowserMultiFormatReader();
      const controls = await codeReader.decodeFromStream(
        stream,
        video,
        (result, error, ctrl) => {
          if (result) {
            const code = result.getText()?.trim();
            if (code) {
              log('Barcode detected:', code);
              ctrl.stop();
              controlsRef.current = null;
              onChange(code);
              setMessage({ type: 'success', text: `تم استخراج الباركود: ${code}` });
              setTimeout(() => {
                setScanOpen(false);
                setTimeout(() => setMessage(null), 2000);
              }, 300);
            }
          }
          if (error) log('Decode error (continuing):', error.message);
        },
      );
      controlsRef.current = controls;
      log('Barcode decoder started');
    } catch (err) {
      setRequestingCamera(false);
      logCameraError(err);
      setScanError(getCameraErrorMessage(err));
    }
  }, [onChange, stopCamera]);

  useEffect(() => {
    if (scanOpen && videoRef.current) {
      const timer = setTimeout(startCameraScan, 300);
      return () => clearTimeout(timer);
    }
  }, [scanOpen, startCameraScan]);

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'يرجى اختيار ملف صورة صالح (JPG, PNG, إلخ).' });
        return;
      }
      setUploading(true);
      setMessage(null);
      setImagePreview(null);
      const reader = new FileReader();
      reader.onload = async (event) => {
        const src = event.target?.result as string;
        if (!src) {
          setUploading(false);
          setMessage({ type: 'error', text: 'فشل قراءة الصورة.' });
          return;
        }
        setImagePreview(src);
        const codeReader = new BrowserMultiFormatReader();
        try {
          log('Decoding image from URL');
          const result = await codeReader.decodeFromImageUrl(src);
          if (result) {
            const code = result.getText()?.trim();
            if (code) {
              log('Barcode decoded:', code);
              onChange(code);
              setMessage({ type: 'success', text: `تم استخراج الباركود: ${code}` });
              setTimeout(() => {
                setImagePreview(null);
                setMessage(null);
              }, 3000);
              setUploading(false);
              e.target.value = '';
              return;
            }
          }
        } catch (err) {
          log('Decode failed:', err);
          setMessage({
            type: 'error',
            text: getImageErrorMessage(err, 'لم يتم العثور على باركود في الصورة. جرّب صورة أوضح أو أدخل الرمز يدوياً.'),
          });
          setTimeout(() => setImagePreview(null), 4000);
        }
        setUploading(false);
        setMessage({
          type: 'error',
          text: 'لم يتم العثور على باركود في الصورة. جرّب صورة أوضح أو أدخل الرمز يدوياً.',
        });
        setTimeout(() => setImagePreview(null), 4000);
      };
      reader.onerror = () => {
        setUploading(false);
        setMessage({ type: 'error', text: 'فشل قراءة الصورة.' });
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    },
    [onChange],
  );

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setScanOpen(true)}
          disabled={disabled}
          title="مسح الباركود"
        >
          <Camera className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled || uploading}
          title="رفع صورة الباركود"
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </div>
      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className="py-2">
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}
      {imagePreview && (
        <div className="mt-2 rounded-lg border overflow-hidden max-w-[200px]">
          <img src={imagePreview} alt="معاينة الصورة" className="w-full h-auto" />
          <p className="text-xs text-gray-500 p-2 bg-gray-50">معاينة الصورة المرفوعة</p>
        </div>
      )}
      <p className="text-xs text-gray-500">
        أدخل الرمز يدوياً، أو امسحه بالكاميرا، أو ارفع صورة تحتوي على الباركود.
      </p>

      <Dialog open={scanOpen} onOpenChange={(open) => !open && handleCloseScan()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>مسح الباركود</DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleCloseScan}>
              <X className="w-4 h-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4">
            {scanError && (
              <Alert variant="destructive">
                <AlertDescription>{scanError}</AlertDescription>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setScanOpen(false);
                      fileInputRef.current?.click();
                    }}
                  >
                    <Upload className="w-3.5 h-3.5 mr-1" />
                    رفع صورة الباركود
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setScanOpen(false)}
                  >
                    إدخال الرمز يدوياً
                  </Button>
                </div>
              </Alert>
            )}
            <p className="text-sm text-gray-600">
              {requestingCamera
                ? 'جاري طلب إذن الكاميرا... يرجى السماح بالوصول عند ظهور النافذة.'
                : 'وجّه الكاميرا نحو الباركود. سيتم التعرف عليه تلقائياً.'}
            </p>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center relative">
              {requestingCamera && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white bg-black/80 z-10">
                  <Loader2 className="w-10 h-10 animate-spin" />
                  <span className="text-sm">جاري تهيئة الكاميرا...</span>
                </div>
              )}
              <video
                ref={videoRef}
                playsInline
                muted
                autoPlay
                className="w-full h-full object-cover"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <p className="text-xs text-gray-500 text-center">
              إذا لم تنجح المسح، ارفع صورة الباركود أو أدخل الرمز يدوياً.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
