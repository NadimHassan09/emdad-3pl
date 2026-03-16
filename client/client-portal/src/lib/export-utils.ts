/**
 * Utility functions for exporting data to CSV and PDF
 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}


 */

/**
 * Export table data to CSV
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string = 'export.csv',
  headers?: string[],
): void {
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }

  // Get headers from first object if not provided
  const csvHeaders = headers || Object.keys(data[0]);

  // Create CSV content
  const csvContent = [
    // Headers row
    csvHeaders.map((h) => `"${h}"`).join(','),
    // Data rows
    ...data.map((row) =>
      csvHeaders
        .map((header) => {
          const value = row[header];
          // Handle null/undefined
          if (value === null || value === undefined) return '""';
          // Escape quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  ].join('\n');

  // Add BOM for UTF-8 to support Arabic characters
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export page content to PDF using html2canvas and jsPDF
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'export.pdf',
  options?: {
    margin?: number;
    format?: string;
    orientation?: 'portrait' | 'landscape';
  },
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('لم يتم العثور على العنصر للتصدير');
      return;
    }

    // Dynamic imports
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: options?.orientation || 'portrait',
      unit: 'mm',
      format: options?.format || 'a4',
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const margin = (options?.margin || 10) * 2.83465; // Convert mm to points

    pdf.addImage(imgData, 'PNG', margin / 2, margin / 2, imgWidth - margin, imgHeight - margin);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    // Fallback to print dialog
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${filename}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                @media print { body { margin: 0; } }
              </style>
            </head>
            <body>${element.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } else {
      alert('حدث خطأ أثناء تصدير PDF');
    }
  }
}

/**
 * Simple pagination utility
 */
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): { data: T[]; totalPages: number; total: number } {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    total,
  };
}

