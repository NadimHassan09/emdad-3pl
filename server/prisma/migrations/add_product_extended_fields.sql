-- Add extended product fields for client portal
-- Product Definition
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "category" VARCHAR(100);
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "brand" VARCHAR(100);

-- Logistics Information
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "weight" DECIMAL(18,4) DEFAULT 0;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "length_cm" DECIMAL(18,4) DEFAULT 0;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "width_cm" DECIMAL(18,4) DEFAULT 0;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "height_cm" DECIMAL(18,4) DEFAULT 0;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "units_per_carton" INTEGER DEFAULT 1;

-- Identification & Tracking
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "barcode" VARCHAR(100);
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "is_serialized" BOOLEAN DEFAULT false;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "is_batch_tracked" BOOLEAN DEFAULT false;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "requires_expiry_date" BOOLEAN DEFAULT false;

-- Inventory Rules (reorder_point; min_threshold already exists)
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "reorder_point" DECIMAL(18,4);

-- Commercial Info (declared_value; price already exists as selling price)
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "declared_value" DECIMAL(18,4);
