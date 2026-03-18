-- Add optional price and description to product table
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "description" TEXT;
ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "price" DECIMAL(18,4);
