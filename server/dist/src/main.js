"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./database/prisma/prisma.service");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter());
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            return callback(null, true);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.enableShutdownHooks();
    const prisma = app.get(prisma_service_1.PrismaService);
    prisma.enableShutdownHooks(app);
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`Backend API running at http://localhost:${port} (admin app should use this URL for VITE_API_URL)`);
}
void bootstrap();
//# sourceMappingURL=main.js.map