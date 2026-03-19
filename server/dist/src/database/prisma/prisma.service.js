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
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
function getDatasourceUrl() {
    const url = process.env.DATABASE_URL;
    if (!url)
        return undefined;
    const limit = process.env.DATABASE_CONNECTION_LIMIT || '5';
    if (url.includes('connection_limit='))
        return url;
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}connection_limit=${limit}`;
}
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        const url = getDatasourceUrl();
        super(url ? { datasources: { db: { url } } } : {});
    }
    async onModuleInit() {
        void this.$connect().catch((err) => {
            console.error('[Prisma] Failed to connect during startup:', err);
        });
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    enableShutdownHooks(app) {
        process.on('beforeExit', () => {
            void app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map