import { useState, useRef, useCallback } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Upload, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DEBUG = false;
function log(...args: unknown[]) {
  if (DEBUG) console.log('[BarcodeInput]', ...args);
}

export interface BarcodeInputProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
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
  placeholder = 'رمز الباركود أو ارفع صورة',
  disabled = false,
}: BarcodeInputProps) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        أدخل الرمز يدوياً أو ارفع صورة تحتوي على الباركود.
      </p>
    </div>
  );
}
