import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaService } from './database/prisma/prisma.service';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  // Enable CORS for frontend applications
  app.enableCors({
    origin: [
      'http://localhost:5173', // Admin app
      'http://localhost:5174', // Client portal
      'http://127.0.0.1:5173', // Admin app (IPv4)
      'http://127.0.0.1:5174', // Client portal (IPv4)
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.enableShutdownHooks();
  const prisma = app.get(PrismaService);
  prisma.enableShutdownHooks(app);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Backend API running at http://localhost:${port} (admin app should use this URL for VITE_API_URL)`);
}

void bootstrap();
