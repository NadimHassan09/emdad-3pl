# 3PL WMS Backend (NestJS)

Backend API for the Emdad 3PL Warehouse Management System, built with [NestJS](https://nestjs.com/) and PostgreSQL via Prisma.

## Requirements

- Node.js (LTS recommended)
- npm
- PostgreSQL (local or remote)

## Quick start

From the `server/` directory:

1. Install dependencies

```bash
npm install
```

2. Create your environment file

```bash
copy .env.example .env
```

3. Generate Prisma client

```bash
npm run prisma:generate
```

4. Start in development mode

```bash
npm run start:dev
```

The API will run on `http://localhost:3000` by default.

## Environment variables

The application loads `.env.local` first (if present) and falls back to `.env`.

Required/commonly used variables (see `.env.example`):

- **`PORT`**: HTTP port (default: `3000`)
- **`DATABASE_URL`**: PostgreSQL connection string (Prisma)
- **`JWT_SECRET`**: Secret used to sign JWTs (use a strong value, at least 32 chars)
- **`JWT_ACCESS_EXPIRES_IN`**: Access token lifetime (seconds)
- **`JWT_REFRESH_EXPIRES_IN`**: Refresh token lifetime (seconds)

## Available scripts

All commands below run from `server/`.

### Run the app

- **`npm run start`**: Start Nest (non-watch)
- **`npm run start:dev`**: Start with watch mode
- **`npm run start:debug`**: Start with debug + watch

### Production

This project builds into `dist/` and the production entrypoint is `dist/src/main.js`.

- **`npm run build`**: Compile TypeScript to `dist/`
- **`npm run start:prod`**: Run compiled output (`node dist/src/main.js`)
- **`npm run start:prod:build`**: Build then start production

### Quality & tests

- **`npm run lint`**: Lint + auto-fix
- **`npm run format`**: Prettier format
- **`npm run test`**: Unit tests
- **`npm run test:watch`**: Unit tests in watch mode
- **`npm run test:cov`**: Coverage
- **`npm run test:e2e`**: E2E tests

### Prisma

- **`npm run prisma:generate`**: Generate Prisma client
- **`npm run prisma:studio`**: Open Prisma Studio

## Database / Prisma notes

- The canonical database schema lives in `/context/schema.sql`.
- `prisma/schema.prisma` is intended to stay aligned with that schema. If you are working against an existing database, prefer **introspection**; if you own the schema evolution, prefer **migrations**.
- This repository currently includes Prisma models and enums aligned with the WMS domain (clients, warehouses, inventory, orders, billing, audit, etc.).

## API / CORS

- **Base URL**: `http://localhost:${PORT}`
- **CORS** is enabled for local frontend dev by default:
  - `http://localhost:5173` (Admin app)
  - `http://localhost:5174` (Client portal)
  - `http://127.0.0.1:5173`
  - `http://127.0.0.1:5174`

## Project structure (NestJS)

- `src/main.ts`: bootstrap, global pipes/filters, CORS
- `src/app.module.ts`: root module wiring and feature module imports
- `src/common/`: shared filters, DTO helpers, constants, guards, etc.
- `src/database/`: Prisma client wrapper (`PrismaService`) and `DatabaseModule`
- `src/modules/`: feature modules (controllers/services)

Key feature modules currently wired in `AppModule` include:

- `auth`, `actors`, `clients`, `users`
- `warehouses`, `locations`, `uom`, `products`, `batches`
- `inventory`, `inbound-orders`, `outbound-orders`, `stock-reservations`
- `task-work-orders`, `adjustments`, `return-orders`, `approvals`, `audit`
- `billing`, `vas`, `client-settings`, `dashboard`
- `client-portal-team`, `client-portal-notifications`

## Deployment notes

- Build once: `npm run build`
- Run the compiled server: `npm run start:prod`
- Ensure your runtime environment provides the same required variables as `.env.example` (especially `DATABASE_URL` and JWT settings).

## Notes

- This backend does not currently expose Swagger/OpenAPI docs (no `@nestjs/swagger` integration yet). If you want, I can add Swagger in the standard NestJS way and document it here.
