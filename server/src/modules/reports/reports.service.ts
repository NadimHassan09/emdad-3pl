import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}


import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';

export enum ReportStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ReportType {
  CURRENT_STOCK = 'تقرير المخزون الحالي',
  INVENTORY_LEDGER = 'تقرير سجل المخزون',
  ORDERS_SUMMARY = 'تقرير ملخص الطلبات',
  MOVEMENTS_LOG = 'تقرير سجل الحركات',
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all generated reports for a client
   */
  async findMany(clientId: string, filter: ReportFilterDto) {
    const page = filter.page || 1;
    const limit = filter.limit || 20;
    const skip = (page - 1) * limit;

    const [reports, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
        select: {
          id: true,
          action: true,
          detailsJson: true,
          createdAt: true,
        },
      }),
      this.prisma.auditLog.count({
        where: {
          actor: {
            clientAccount: {
              clientId: clientId,
            },
          },
          resourceType: 'REPORT',
        },
      }),
    ]);

    // Transform audit logs to report format
    const formattedReports = reports.map((log) => {
      const details = log.detailsJson as any;
      return {
        id: log.id,
        reportName: details?.reportName || log.action,
        creationDate: log.createdAt.toISOString(),
        extension: details?.extension || 'PDF',
        status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      };
    });

    return {
      data: formattedReports,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Generate a new report
   */
  async generate(clientId: string, actorId: string, dto: GenerateReportDto) {
    // For now, we'll create a report record in audit_log
    // In a real implementation, this would trigger actual report generation
    const reportName = this.getReportName(dto.reportType, dto.dateFrom, dto.dateTo);

    const report = await this.prisma.auditLog.create({
      data: {
        actorId: actorId,
        action: 'GENERATE_REPORT',
        resourceType: 'REPORT',
        resourceId: null,
        detailsJson: {
          reportType: dto.reportType,
          reportName: reportName,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          warehouseId: dto.warehouseId,
          sku: dto.sku,
          location: dto.location,
          extension: 'PDF',
          status: 'PENDING',
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    // Simulate async report generation
    // In production, this would be a background job
    setTimeout(async () => {
      await this.prisma.auditLog.update({
        where: { id: report.id },
        data: {
          detailsJson: {
            ...(report.detailsJson as any),
            status: 'COMPLETED',
          },
        },
      });
    }, 2000);

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details.reportName,
      creationDate: report.createdAt.toISOString(),
      extension: details.extension,
      status: 'قيد المعالجة',
    };
  }

  /**
   * Get a specific report by ID
   */
  async findOne(reportId: string, clientId: string) {
    const report = await this.prisma.auditLog.findFirst({
      where: {
        id: reportId,
        resourceType: 'REPORT',
        actor: {
          clientAccount: {
            clientId: clientId,
          },
        },
      },
      select: {
        id: true,
        action: true,
        detailsJson: true,
        createdAt: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    const details = report.detailsJson as any;
    return {
      id: report.id,
      reportName: details?.reportName || report.action,
      creationDate: report.createdAt.toISOString(),
      extension: details?.extension || 'PDF',
      status: details?.status === 'COMPLETED' ? 'مكتمل' : 'قيد المعالجة',
      reportType: details?.reportType,
      dateFrom: details?.dateFrom,
      dateTo: details?.dateTo,
      warehouseId: details?.warehouseId,
      sku: details?.sku,
      location: details?.location,
    };
  }

  /**
   * Generate report name based on type and dates
   */
  private getReportName(reportType: string, dateFrom?: string, dateTo?: string): string {
    const typeMap: Record<string, string> = {
      'تقرير المخزون الحالي': 'تقرير المخزون الحالي',
      'تقرير سجل المخزون': 'تقرير سجل المخزون',
      'تقرير ملخص الطلبات': 'تقرير ملخص الطلبات',
      'تقرير سجل الحركات': 'تقرير سجل الحركات',
    };

    const baseName = typeMap[reportType] || reportType;
    const now = new Date();
    const month = now.toLocaleString('ar-SA', { month: 'long', year: 'numeric' });

    if (dateFrom && dateTo) {
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      return `${baseName} - ${fromDate.toLocaleDateString('ar-SA')} إلى ${toDate.toLocaleDateString('ar-SA')}`;
    }

    return `${baseName} - ${month}`;
  }
}

