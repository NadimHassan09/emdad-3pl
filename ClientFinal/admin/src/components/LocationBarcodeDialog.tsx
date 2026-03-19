import { useEffect, useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import { Download, Printer } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface LocationBarcodeDialogProps {
  open: boolean;
  onClose: () => void;
  locationCode: string;
  warehouseName?: string;
  locationType?: string;
}

const BARCODE_OPTIONS = {
  format: 'CODE128',
  width: 2.5,
  height: 80,
  displayValue: true,
  fontSize: 14,
  fontOptions: 'bold',
  textMargin: 6,
  margin: 16,
  background: '#ffffff',
  lineColor: '#111827',
} as const;

export function LocationBarcodeDialog({
  open,
  onClose,
  locationCode,
  warehouseName,
  locationType,
}: LocationBarcodeDialogProps) {
  // We render onto a <canvas> – JsBarcode writes pixel data directly, so
  // there is no SVG→canvas conversion step and the image is never empty.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open || !canvasRef.current || !locationCode) return;
    setError(false);
    try {
      JsBarcode(canvasRef.current, locationCode, BARCODE_OPTIONS);
    } catch {
      setError(true);
    }
  }, [open, locationCode]);

  /** Download the canvas as a PNG directly – no SVG conversion needed. */
  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `barcode-${locationCode}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  /** Build an SVG string via JsBarcode and download it. */
  const handleDownloadSVG = () => {
    try {
      // Create an off-screen SVG element, let JsBarcode populate it, then serialise
      const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      JsBarcode(svgEl, locationCode, { ...BARCODE_OPTIONS });
      const svgData = new XMLSerializer().serializeToString(svgEl);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `barcode-${locationCode}.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      /* silent */
    }
  };

  /** Open a minimal print window that includes the barcode image. */
  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank', 'width=640,height=420');
    if (!win) return;
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>باركود - ${locationCode}</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
              display: flex; flex-direction: column;
              align-items: center; justify-content: center;
              min-height: 100vh; font-family: monospace; gap: 8px;
            }
            .meta { font-size: 12px; color: #666; }
            img { max-width: 100%; }
            @media print { body { margin: 24px; } }
          </style>
        </head>
        <body>
          ${warehouseName ? `<div class="meta">${warehouseName}${locationType ? ` · ${locationType}` : ''}</div>` : ''}
          <img src="${dataUrl}" alt="${locationCode}" />
          <script>window.onload = () => { window.print(); window.close(); }<\/script>
        </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>باركود الموقع</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Meta info */}
          <div className="text-center space-y-0.5">
            <p className="font-mono font-bold text-lg text-gray-900">{locationCode}</p>
            {warehouseName && (
              <p className="text-xs text-gray-500">
                {warehouseName}{locationType ? ` · ${locationType}` : ''}
              </p>
            )}
          </div>

          {/* Barcode canvas */}
          <div className="flex justify-center bg-white border border-gray-100 rounded-lg p-3">
            {error ? (
              <p className="text-sm text-red-500 py-6">تعذر إنشاء الباركود</p>
            ) : (
              <canvas ref={canvasRef} className="max-w-full rounded" />
            )}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              onClick={handleDownloadPNG}
            >
              <Download className="w-3.5 h-3.5" />
              PNG
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              onClick={handleDownloadSVG}
            >
              <Download className="w-3.5 h-3.5" />
              SVG
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              onClick={handlePrint}
            >
              <Printer className="w-3.5 h-3.5" />
              طباعة
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
