# 3PL WMS Backend

NestJS backend for the Emdad 3PL Warehouse Management System.

## Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL` (PostgreSQL).
2. Install dependencies: `npm install --legacy-peer-deps`
3. Generate Prisma client: `npm run prisma:generate`
4. (Optional) Introspect or migrate the database per `/context/schema.sql`.

## Scripts

- `npm run start:dev` — Start with watch mode
- `npm run build` — Build for production
- `npm run prisma:generate` — Generate Prisma client
- `npm run prisma:studio` — Open Prisma Studio

## Structure

- `src/common/` — Shared constants, decorators, DTOs, guards, etc.
- `src/config/` — Configuration
- `src/database/` — PrismaService and DatabaseModule
- `src/modules/` — Feature modules (auth, clients, users, …)

The canonical database schema is in `/context/schema.sql`.
