import { Response } from 'express';
import { ReportsService } from './reports.service';
import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportFilterDto } from './dto/report-filter.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findMany(filter: ReportFilterDto, actor: JwtPayload): Promise<{
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
    }> | {
        data: never[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    generate(dto: GenerateReportDto, actor: JwtPayload): Promise<{
        id: string;
        reportName: any;
        creationDate: string;
        extension: any;
        status: string;
    }>;
    findOne(id: string, actor: JwtPayload): Promise<{
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
    download(id: string, format: string | undefined, actor: JwtPayload, res: Response): Promise<void>;
}
