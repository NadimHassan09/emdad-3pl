import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    // Do not block Nest boot on DB availability.
    // Render expects the HTTP server to start listening quickly.
    // If DB is temporarily unavailable, Prisma operations will fail and can be retried later.
    void this.$connect().catch((err) => {
      console.error('[Prisma] Failed to connect during startup:', err);
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  enableShutdownHooks(app: { close: () => Promise<void> }): void {
    process.on('beforeExit', () => {
      void app.close();
    });
  }
}
