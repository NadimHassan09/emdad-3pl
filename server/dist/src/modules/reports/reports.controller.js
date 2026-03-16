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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const generate_report_dto_1 = require("./dto/generate-report.dto");
const report_filter_dto_1 = require("./dto/report-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Param,
    common_1.Body,
    common_1.Query,
    common_1.UseGuards,
    common_1.ParseUUIDPipe,
    common_1.Res,
;
from;
'@nestjs/common';
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    findMany(filter, actor) {
        if (!actor.clientId) {
            return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
        }
        return this.reportsService.findMany(actor.clientId, filter);
    }
    generate(dto, actor) {
        if (!actor.clientId || !actor.actorId) {
            throw new Error('Client ID or Actor ID not found in token');
        }
        return this.reportsService.generate(actor.clientId, actor.actorId, dto);
    }
    findOne(id, actor) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        return this.reportsService.findOne(id, actor.clientId);
    }
    async download(id, format = 'pdf', actor, res) {
        if (!actor.clientId) {
            throw new Error('Client ID not found in token');
        }
        const report = await this.reportsService.findOne(id, actor.clientId);
        const contentType = format === 'csv' ? 'text/csv' : 'application/pdf';
        const extension = format === 'csv' ? 'csv' : 'pdf';
        const filename = `${report.reportName}.${extension}`;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        const placeholder = format === 'csv'
            ? 'Report data would be here in CSV format'
            : 'Report data would be here in PDF format';
        res.send(placeholder);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_filter_dto_1.ReportFilterDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_report_dto_1.GenerateReportDto, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('format')),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "download", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map