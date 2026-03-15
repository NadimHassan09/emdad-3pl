"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = exports.ReportType = exports.ReportStatus = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["PENDING"] = "PENDING";
    ReportStatus["COMPLETED"] = "COMPLETED";
    ReportStatus["FAILED"] = "FAILED";
})(ReportStatus || (exports.ReportStatus = ReportStatus = {}));
var ReportType;
(function (ReportType) {
    ReportType["CURRENT_STOCK"] = "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u062D\u0627\u0644\u064A";
    ReportType["INVENTORY_LEDGER"] = "\u062A\u0642\u0631\u064A\u0631 \u0633\u062C\u0644 \u0627\u0644\u0645\u062E\u0632\u0648\u0646";
    ReportType["ORDERS_SUMMARY"] = "\u062A\u0642\u0631\u064A\u0631 \u0645\u0644\u062E\u0635 \u0627\u0644\u0637\u0644\u0628\u0627\u062A";
    ReportType["MOVEMENTS_LOG"] = "\u062A\u0642\u0631\u064A\u0631 \u0633\u062C\u0644 \u0627\u0644\u062D\u0631\u0643\u0627\u062A";
})(ReportType || (exports.ReportType = ReportType = {}));
let ReportsService = class ReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMany(clientId, filter) {
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
        const formattedReports = reports.map((log) => {
            const details = log.detailsJson;
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
    async generate(clientId, actorId, dto) {
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
        setTimeout(async () => {
            await this.prisma.auditLog.update({
                where: { id: report.id },
                data: {
                    detailsJson: {
                        ...report.detailsJson,
                        status: 'COMPLETED',
                    },
                },
            });
        }, 2000);
        const details = report.detailsJson;
        return {
            id: report.id,
            reportName: details.reportName,
            creationDate: report.createdAt.toISOString(),
            extension: details.extension,
            status: 'قيد المعالجة',
        };
    }
    async findOne(reportId, clientId) {
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
            throw new common_1.NotFoundException('Report not found');
        }
        const details = report.detailsJson;
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
    getReportName(reportType, dateFrom, dateTo) {
        const typeMap = {
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
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map