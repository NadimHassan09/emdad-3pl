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
exports.BatchesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let BatchesService = class BatchesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        return this.prisma.batch.create({
            data: {
                productId: dto.productId,
                batchCode: dto.batchCode.trim(),
                expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : undefined,
                manufacturingDate: dto.manufacturingDate
                    ? new Date(dto.manufacturingDate)
                    : undefined,
                receivedDate: dto.receivedDate ? new Date(dto.receivedDate) : undefined,
                lotNumber: dto.lotNumber?.trim(),
                supplierBatchCode: dto.supplierBatchCode?.trim(),
                batchStatus: dto.batchStatus ?? 'AVAILABLE',
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchStatus)
            where.batchStatus = filter.batchStatus;
        return this.prisma.batch.findMany({
            where,
            include: { product: { select: { id: true, sku: true, name: true } } },
            orderBy: [{ productId: 'asc' }, { batchCode: 'asc' }],
        });
    }
    async findOne(id) {
        const batch = await this.prisma.batch.findUnique({
            where: { id },
            include: { product: true },
        });
        if (!batch)
            throw new common_1.NotFoundException('Batch not found');
        return batch;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.batch.update({
            where: { id },
            data: {
                ...(dto.batchCode !== undefined && { batchCode: dto.batchCode.trim() }),
                ...(dto.expiryDate !== undefined && {
                    expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null,
                }),
                ...(dto.manufacturingDate !== undefined && {
                    manufacturingDate: dto.manufacturingDate
                        ? new Date(dto.manufacturingDate)
                        : null,
                }),
                ...(dto.receivedDate !== undefined && {
                    receivedDate: dto.receivedDate ? new Date(dto.receivedDate) : null,
                }),
                ...(dto.lotNumber !== undefined && {
                    lotNumber: dto.lotNumber?.trim(),
                }),
                ...(dto.supplierBatchCode !== undefined && {
                    supplierBatchCode: dto.supplierBatchCode?.trim(),
                }),
                ...(dto.batchStatus !== undefined && {
                    batchStatus: dto.batchStatus,
                }),
            },
        });
    }
};
exports.BatchesService = BatchesService;
exports.BatchesService = BatchesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BatchesService);
//# sourceMappingURL=batches.service.js.map