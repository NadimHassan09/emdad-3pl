import { PrismaService } from '../../database/prisma/prisma.service';
import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';
export declare enum ReportStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare enum ReportType {
    CURRENT_STOCK = "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u062D\u0627\u0644\u064A",
    INVENTORY_LEDGER = "\u062A\u0642\u0631\u064A\u0631 \u0633\u062C\u0644 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
    ORDERS_SUMMARY = "\u062A\u0642\u0631\u064A\u0631 \u0645\u0644\u062E\u0635 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
    MOVEMENTS_LOG = "\u062A\u0642\u0631\u064A\u0631 \u0633\u062C\u0644 \u0627\u0644\u062D\u0631\u0643\u0627\u062A"
}
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMany(clientId: string, filter: ReportFilterDto): Promise<{
        data: {
            id: string;
            reportName: any;
            creationDate: string;
            extension: any;
            status: string;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    generate(clientId: string, actorId: string, dto: GenerateReportDto): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(reportId: string, clientId: string): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
        reportType: any;
        dateFrom: any;
        dateTo: any;
        warehouseId: any;
        sku: any;
        location: any;
    }>;
    private getReportName;
}
