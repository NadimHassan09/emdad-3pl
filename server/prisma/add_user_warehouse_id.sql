-- Add optional warehouse_id to users for identity-access (المستودع).
-- Run this once if you have not applied the schema with: npx prisma db push
-- Example: psql $DATABASE_URL -f prisma/add_user_warehouse_id.sql

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS warehouse_id UUID REFERENCES warehouse(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS users_warehouse_id_idx ON users(warehouse_id);
