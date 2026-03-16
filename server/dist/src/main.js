"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./database/prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:5175',
            'http://127.0.0.1:5173',
            'http://127.0.0.1:5174',
            'http://127.0.0.1:5175',
        ],
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
}
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
new common_1.ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
}),
;
;
app.enableShutdownHooks();
const prisma = app.get(prisma_service_1.PrismaService);
prisma.enableShutdownHooks(app);
const port = process.env.PORT ?? 3000;
await app.listen(port);
void bootstrap();
//# sourceMappingURL=main.js.map