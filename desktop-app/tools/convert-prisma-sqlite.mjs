/**
 * Converts server/prisma/schema.prisma from PostgreSQL to SQLite for the desktop bundle.
 * Run: node tools/convert-prisma-sqlite.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const schemaPath = path.join(root, 'server', 'prisma', 'schema.prisma');

let s = fs.readFileSync(schemaPath, 'utf8');

s = s.replace(/datasource db \{[^}]+\}/s, `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}`);

// Strip native type attributes (SQLite)
s = s.replace(/\s+@db\.\w+(?:\([^)]*\))?/g, '');

// PostgreSQL-only default → Prisma uuid() for SQLite
s = s.replace(/@default\(dbgenerated\("gen_random_uuid\(\)"\)\)/g, '@default(uuid())');

// @default(now()) + @updatedAt is invalid/redundant; use @updatedAt only
s = s.replace(
  /(\s+updatedAt\s+DateTime)\s+@default\(now\(\)\)\s+@updatedAt/g,
  '$1 @updatedAt',
);

// Prisma SQLite: unquoted DEFAULT {} for Json breaks SQL push; omit Prisma @default on Json.
s = s.replace(
  /permissionsJson Json\s+@default\("\{}"\)\s+@map/g,
  'permissionsJson Json     @map',
);
s = s.replace(
  /ruleJson\s+Json\s+@default\("\{}"\)\s+@map/g,
  'ruleJson       Json         @map',
);
s = s.replace(
  /detailsJson\s+Json\s+@default\("\{}"\)\s+@map/g,
  'detailsJson  Json     @map',
);

fs.writeFileSync(schemaPath, s);

const mirrorDir = path.join(root, 'prisma');
fs.mkdirSync(mirrorDir, { recursive: true });
fs.copyFileSync(schemaPath, path.join(mirrorDir, 'schema.prisma'));

console.log('OK: SQLite schema written to server/prisma/schema.prisma and prisma/schema.prisma');
