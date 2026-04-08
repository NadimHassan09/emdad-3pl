import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Ensure DATABASE_URL has connection_limit for serverless/limited DBs (e.g. Render, Aiven).
 * Prevents "Too many database connections" errors.
 */
function getDatasourceUrl(): string | undefined {
  const url = process.env.DATABASE_URL;
  if (!url) return undefined;
  const limit = process.env.DATABASE_CONNECTION_LIMIT || '5';
  if (url.includes('connection_limit=')) return url;
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}connection_limit=${limit}`;
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const url = getDatasourceUrl();
    super(url ? { datasources: { db: { url } } } : {});
  }

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
