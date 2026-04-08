# Emdad 3PL — Desktop (offline) bundle

Self-contained copy under `desktop-app/` only. The main monorepo is **not** modified.

## What’s inside

- **`server/`** — NestJS API with **Prisma + SQLite** (`server/prisma/dev.db`).
- **`client/`** — Client portal (Vite/React), build output in `client/dist/`.
- **`admin/`** — Admin console (Vite/React), build output in `admin/dist/`.
- **`main.js`** — Electron entry: starts the API, then opens **two windows** (Admin + Client).

## Prerequisites

- Node.js 20+ (for `npm`, `npx`, and spawning the Nest process from Electron).

## First-time setup

```bash
cd desktop-app
npm run install:all
```

If you reset from the upstream PostgreSQL schema, re-run SQLite conversion (already applied in this copy):

```bash
node tools/convert-prisma-sqlite.mjs
```

Create / update the database and seed demo data:

```bash
cd server
npx prisma db push --accept-data-loss
npx prisma db seed
cd ..
```

## Run as desktop app (dev)

```bash
npm run electron
```

This builds the server + both UIs, then launches Electron. The API listens on **http://127.0.0.1:3000** (production builds of the React apps use `VITE_API_URL=http://127.0.0.1:3000`).

### Demo logins (after seed)

- **Staff:** `admin@emdad3pl.com` / `password123`
- **Client:** `client1@acme.com` / `password123`

## Windows installer

```bash
npm run dist
```

Output: **`desktop-app/dist/`** (NSIS installer, e.g. `Emdad3PLDesktop Setup 1.0.0.exe`).  
If packaging fails on Windows with symlink errors from `winCodeSign`, the `npm run dist` script sets `CSC_IDENTITY_AUTO_DISCOVERY=false` via `cross-env` (run `npm install` at `desktop-app` root after pulling).  
Packaging includes `server/node_modules` (large). Prisma’s SQLite `dev.db` is under `server/prisma/`; for a clean DB on first install you may later switch the app to copy a template DB into the user data directory.

## Notes

- **SQLite vs PostgreSQL:** Case-insensitive `mode: 'insensitive'` Prisma filters were removed in this copy where required for SQLite.
- **JSON defaults:** Prisma’s SQLite SQL generator mishandled `Json @default("{}")`; those defaults were removed so `db push` works. Creates must supply JSON fields (seed and services already do).
- **Inventory triggers:** PostgreSQL triggers that sync `current_stock` from the ledger are **not** present on SQLite; the seed inserts **both** ledger rows and matching `current_stock` rows for the demo.

## Vite output paths

This bundle uses `client/dist` and `admin/dist` (Vite default), not `build/`.
