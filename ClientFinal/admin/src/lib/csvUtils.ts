/**
 * Escape a cell value for CSV (handles commas, quotes, newlines).
 */
function escapeCsvCell(value: string | number | null | undefined): string {
  if (value == null) return '';
  const s = String(value);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

/**
 * Convert columns and rows to CSV string.
 */
export function toCsv(columns: string[], rows: (string | number | null | undefined)[][]): string {
  const header = columns.map(escapeCsvCell).join(',');
  const body = rows.map((row) => row.map(escapeCsvCell).join(',')).join('\n');
  return header + '\n' + body;
}

/**
 * Trigger download of CSV file.
 */
export function downloadCsv(
  columns: string[],
  rows: (string | number | null | undefined)[][],
  filename: string,
): void {
  const csv = toCsv(columns, rows);
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.csv') ? filename : `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
