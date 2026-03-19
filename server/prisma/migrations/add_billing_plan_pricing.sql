-- Add pricing columns to billing_plan
ALTER TABLE billing_plan
  ADD COLUMN IF NOT EXISTS base_fee_cents BIGINT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS inbound_item_fee_cents BIGINT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS inbound_weight_cents_per_kg BIGINT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS outbound_item_fee_cents BIGINT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS outbound_weight_cents_per_kg BIGINT DEFAULT 0;

-- Add PLAN_FEE to charge_category enum (PostgreSQL 9.1+)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_enum
    WHERE enumlabel = 'PLAN_FEE'
    AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'charge_category')
  ) THEN
    ALTER TYPE charge_category ADD VALUE 'PLAN_FEE';
  END IF;
END
$$;
