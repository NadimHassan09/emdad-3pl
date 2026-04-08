import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadCsv } from '@/lib/csvUtils';

export interface CsvColumn {
  key: string;
  label: string;
}

interface CsvButtonProps<T> {
  columns: CsvColumn[];
  data: T[];
  getRow: (item: T) => (string | number | null | undefined)[];
  filename: string;
  disabled?: boolean;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

export function CsvButton<T>({
  columns,
  data,
  getRow,
  filename,
  disabled = false,
  variant = 'outline',
  size = 'sm',
  className = '',
  children,
}: CsvButtonProps<T>) {
  const handleClick = () => {
    const headers = columns.map((c) => c.label);
    const rows = data.map(getRow);
    downloadCsv(headers, rows, filename);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      onClick={handleClick}
      disabled={disabled || data.length === 0}
    >
      <Download className="w-4 h-4" />
      {children ?? 'تصدير CSV'}
    </Button>
  );
}
