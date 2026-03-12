-- =============================================================================
-- 3PL Warehouse Management System - PostgreSQL Schema (Refactored)
-- =============================================================================
--
-- KEY DESIGN CHANGES IN THIS REFACTOR:
--
-- 1) billing_transaction: Renamed from "transaction" to avoid reserved word and
--    clarify domain; indexes and references updated.
--
-- 2) Stock reservation/allocation: New tables stock_reservation and outbound_allocation
--    support reserved/picked/shipped quantities per outbound order item, with
--    batch/location granularity for future execution flows.
--
-- 3) Unified actor model: New "actor" table; internal users and client accounts
--    map to actor rows. Operational tables (inbound_order, outbound_order,
--    adjustment, approval, audit_log) reference actor_id instead of
--    created_by_id+creator_type for FK integrity.
--
-- 4) Approval workflow: Added request_notes, decision_notes, decision_at,
--    approval_step, sequence_no; approval tables use actor_id FKs.
--
-- 5) task_work_order: Added reference_type and reference_item_id for linking to
--    orders, items, adjustments, returns, etc.; dedicated task_status enum.
--
-- 6) task_status: New enum (PENDING, ASSIGNED, IN_PROGRESS, COMPLETED, CANCELLED)
--    so task status is separate from order_status.
--
-- 7) batch: Expanded with manufacturing_date, received_date, lot_number,
--    supplier_batch_code, batch_status enum (AVAILABLE, HOLD, QUARANTINE,
--    EXPIRED, CONSUMED).
--
-- 8) current_stock: CHECK(quantity >= 0); documented as derived snapshot only.
--
-- 9) current_stock write protection: Trigger blocks INSERT/UPDATE/DELETE unless
--    session variable app.allow_current_stock_write = 'true'; ledger sync
--    function sets this so only it can write.
--
-- 10) UOM: Added uom_dimension enum (COUNT, LENGTH, WEIGHT, VOLUME, TEMPERATURE)
--     for conversion families.
--
-- 11) Warehouse/location capacity: Replaced capacity_units with capacity_value
--     and capacity_uom_id (FK to uom).
--
-- 12) vas_pricing: Added pricing_method, base_uom_id, min_charge_cents,
--     billing_unit, rule_json for flexible pricing.
--
-- 13) invoice: Added subtotal_cents, tax_amount_cents, discount_amount_cents,
--     due_date, issued_at, paid_at, notes.
--
-- 14) invoice_line: Added reference_type, reference_id for traceability.
--
-- 15) audit_log: Immutable append-only; removed updated_at and update trigger;
--     trigger blocks UPDATE/DELETE.
--
-- 16) return_order: Renamed from "return" to avoid SQL keyword.
--
-- 17) client_billing_plan: New table linking clients to billing plans with
--     starts_at, ends_at, is_current; partial unique for one current plan per client.
--
-- =============================================================================

-- -----------------------------------------------------------------------------
-- ENUM Types
-- -----------------------------------------------------------------------------
CREATE TYPE client_status AS ENUM ('ACTIVE', 'SUSPENDED', 'CLOSED');
CREATE TYPE location_type AS ENUM ('ZONE', 'AISLE', 'RACK', 'BIN', 'STAGING');
CREATE TYPE order_status AS ENUM ('DRAFT', 'PENDING', 'CONFIRMED', 'IN_PROGRESS', 'RECEIVING', 'SHIPPED', 'COMPLETED', 'CANCELLED');
CREATE TYPE task_priority AS ENUM ('LOW', 'NORMAL', 'HIGH', 'URGENT');
CREATE TYPE task_type AS ENUM ('RECEIVING', 'PUTAWAY', 'PICKING', 'PACKING', 'SHIPPING', 'CYCLE_COUNT', 'REPLENISHMENT', 'ADJUSTMENT');
-- Change 6: Dedicated task status; order_status remains for orders only.
CREATE TYPE task_status AS ENUM ('PENDING', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');
CREATE TYPE movement_type AS ENUM ('RECEIPT', 'PUTAWAY', 'PICK', 'SHIPMENT', 'ADJUSTMENT', 'TRANSFER_IN', 'TRANSFER_OUT', 'RETURN', 'CYCLE_COUNT');
CREATE TYPE adjustment_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'APPLIED');
CREATE TYPE return_disposition AS ENUM ('RESTOCK', 'DAMAGED', 'QUARANTINE', 'DISPOSAL');
CREATE TYPE approval_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
CREATE TYPE approval_reference_type AS ENUM ('ADJUSTMENT', 'RETURN', 'INVOICE', 'ORDER');
CREATE TYPE invoice_status AS ENUM ('DRAFT', 'ISSUED', 'PAID', 'OVERDUE', 'CANCELLED');
CREATE TYPE billing_cycle_enum AS ENUM ('WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUALLY');
CREATE TYPE charge_category AS ENUM ('STORAGE', 'MOVEMENT', 'VAS', 'MANUAL_CREDIT', 'MANUAL_CHARGE');
-- Change 3: Unified actor model.
CREATE TYPE actor_type AS ENUM ('INTERNAL_USER', 'CLIENT_ACCOUNT', 'SYSTEM');
-- Change 2: Reservation/allocation for outbound execution.
CREATE TYPE reservation_status AS ENUM ('DRAFT', 'CONFIRMED', 'RELEASED', 'CANCELLED');
CREATE TYPE allocation_status AS ENUM ('RESERVED', 'PARTIALLY_PICKED', 'PICKED', 'PARTIALLY_SHIPPED', 'SHIPPED', 'CANCELLED');
-- Change 7: Batch lifecycle.
CREATE TYPE batch_status AS ENUM ('AVAILABLE', 'HOLD', 'QUARANTINE', 'EXPIRED', 'CONSUMED');
-- Change 10: UOM dimension for conversion families.
CREATE TYPE uom_dimension AS ENUM ('COUNT', 'LENGTH', 'WEIGHT', 'VOLUME', 'TEMPERATURE');
-- Change 12: VAS pricing method.
CREATE TYPE pricing_method AS ENUM ('FIXED', 'PER_UNIT', 'PER_VOLUME', 'PER_WEIGHT', 'CUSTOM');

-- -----------------------------------------------------------------------------
-- Trigger Function: Auto-update updated_at
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- Trigger: Block UPDATE/DELETE on inventory_ledger (append-only)
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION prevent_ledger_modification()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'inventory_ledger is append-only: UPDATE and DELETE are not allowed';
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- Change 9: Allow current_stock writes only from ledger sync.
-- Caller must SET app.allow_current_stock_write = 'true' in same transaction.
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION prevent_current_stock_direct_write()
RETURNS TRIGGER AS $$
BEGIN
  IF current_setting('app.allow_current_stock_write', true) IS DISTINCT FROM 'true' THEN
    RAISE EXCEPTION 'current_stock is derived from inventory_ledger only; direct INSERT/UPDATE/DELETE is not allowed. Use inventory_ledger and let the sync trigger update current_stock.';
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- Trigger: Sync current_stock on inventory_ledger INSERT (UPSERT).
-- Change 9: Sets session variable so prevent_current_stock_direct_write allows this path.
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION sync_current_stock_on_ledger_insert()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM set_config('app.allow_current_stock_write', 'true', true);
  INSERT INTO current_stock (
    client_id,
    warehouse_id,
    product_id,
    batch_id,
    location_id,
    quantity,
    updated_at
  ) VALUES (
    NEW.client_id,
    NEW.warehouse_id,
    NEW.product_id,
    NEW.batch_id,
    NEW.location_id,
    NEW.qty_change,
    NOW()
  )
  ON CONFLICT (
    client_id,
    warehouse_id,
    product_id,
    (COALESCE(batch_id, '00000000-0000-0000-0000-000000000000'::uuid)),
    (COALESCE(location_id, '00000000-0000-0000-0000-000000000000'::uuid))
  ) DO UPDATE SET
    quantity   = current_stock.quantity + excluded.quantity,
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- Change 15: Prevent audit_log updates/deletes (immutable log).
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION prevent_audit_log_modification()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'audit_log is append-only and immutable: UPDATE and DELETE are not allowed';
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- DOMAIN 1: IAM (Strict External/Internal Separation)
-- =============================================================================

CREATE TABLE client (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(50) NOT NULL UNIQUE,
  name              VARCHAR(255) NOT NULL,
  contact_email     VARCHAR(255),
  contact_phone     VARCHAR(50),
  address_line1     VARCHAR(255),
  city              VARCHAR(100),
  state_region      VARCHAR(100),
  postal_code       VARCHAR(20),
  country_code      CHAR(2),
  balance_cents     BIGINT NOT NULL DEFAULT 0,
  currency          CHAR(3) NOT NULL DEFAULT 'USD',
  status            client_status NOT NULL DEFAULT 'ACTIVE',
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER client_updated_at
  BEFORE UPDATE ON client
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE client_roles (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_name         VARCHAR(100) NOT NULL UNIQUE,
  permissions_json  JSONB NOT NULL DEFAULT '{}',
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER client_roles_updated_at
  BEFORE UPDATE ON client_roles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE client_account (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  client_role_id    UUID NOT NULL REFERENCES client_roles(id) ON DELETE RESTRICT,
  email             VARCHAR(255) NOT NULL UNIQUE,
  password_hash     VARCHAR(255),
  first_name        VARCHAR(100) NOT NULL,
  last_name         VARCHAR(100) NOT NULL,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER client_account_updated_at
  BEFORE UPDATE ON client_account
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_client_account_client ON client_account(client_id);

CREATE TABLE user_roles (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_name         VARCHAR(100) NOT NULL UNIQUE,
  permissions_json  JSONB NOT NULL DEFAULT '{}',
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER user_roles_updated_at
  BEFORE UPDATE ON user_roles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE users (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email             VARCHAR(255) NOT NULL UNIQUE,
  password_hash     VARCHAR(255),
  first_name        VARCHAR(100) NOT NULL,
  last_name         VARCHAR(100) NOT NULL,
  internal_role_id  UUID REFERENCES user_roles(id) ON DELETE SET NULL,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_users_internal_role ON users(internal_role_id);

-- -----------------------------------------------------------------------------
-- Change 3: Unified actor table. Internal users and client accounts map here;
-- operational tables reference actor_id for FK integrity.
-- -----------------------------------------------------------------------------
CREATE TABLE actor (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_type        actor_type NOT NULL,
  user_id           UUID REFERENCES users(id) ON DELETE CASCADE,
  client_account_id UUID REFERENCES client_account(id) ON DELETE CASCADE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_actor_ref CHECK (
    (actor_type = 'INTERNAL_USER' AND user_id IS NOT NULL AND client_account_id IS NULL)
    OR (actor_type = 'CLIENT_ACCOUNT' AND client_account_id IS NOT NULL AND user_id IS NULL)
    OR (actor_type = 'SYSTEM' AND user_id IS NULL AND client_account_id IS NULL)
  )
);

CREATE TRIGGER actor_updated_at
  BEFORE UPDATE ON actor
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE UNIQUE INDEX idx_actor_user ON actor(user_id) WHERE user_id IS NOT NULL;
CREATE UNIQUE INDEX idx_actor_client_account ON actor(client_account_id) WHERE client_account_id IS NOT NULL;
CREATE INDEX idx_actor_type ON actor(actor_type);

-- =============================================================================
-- DOMAIN 2: Master Data
-- =============================================================================

-- Change 10: UOM dimension for conversion families (COUNT, LENGTH, WEIGHT, etc.).
-- Created before warehouse/location so capacity_uom_id can reference uom(id).
CREATE TABLE uom (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(20) NOT NULL UNIQUE,
  name              VARCHAR(100) NOT NULL,
  dimension         uom_dimension NOT NULL,
  base_conversion   NUMERIC(18,6) NOT NULL DEFAULT 1,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER uom_updated_at
  BEFORE UPDATE ON uom
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Change 11: capacity_value + capacity_uom_id (FK to uom) instead of capacity_units.
CREATE TABLE warehouse (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(50) NOT NULL UNIQUE,
  name              VARCHAR(255) NOT NULL,
  capacity_value    NUMERIC(18,4),
  capacity_uom_id   UUID REFERENCES uom(id) ON DELETE SET NULL,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER warehouse_updated_at
  BEFORE UPDATE ON warehouse
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE location (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  warehouse_id        UUID NOT NULL REFERENCES warehouse(id) ON DELETE CASCADE,
  parent_location_id  UUID REFERENCES location(id) ON DELETE CASCADE,
  code                VARCHAR(50) NOT NULL,
  location_type       location_type NOT NULL,
  capacity_value      NUMERIC(18,4),
  capacity_uom_id     UUID REFERENCES uom(id) ON DELETE SET NULL,
  is_active           BOOLEAN NOT NULL DEFAULT TRUE,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (warehouse_id, code)
);

CREATE TRIGGER location_updated_at
  BEFORE UPDATE ON location
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_location_warehouse_parent ON location(warehouse_id, parent_location_id);

-- 9. product
CREATE TABLE product (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE CASCADE,
  sku               VARCHAR(100) NOT NULL,
  name              VARCHAR(255) NOT NULL,
  default_uom_id    UUID NOT NULL REFERENCES uom(id) ON DELETE RESTRICT,
  min_threshold     NUMERIC(18,4) DEFAULT 0,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (client_id, sku)
);

CREATE TRIGGER product_updated_at
  BEFORE UPDATE ON product
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Change 7: batch expanded with manufacturing_date, received_date, lot_number,
-- supplier_batch_code, batch_status. client_id can be derived via product; optional
-- denormalization left for app layer if needed (TODO).
CREATE TABLE batch (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id          UUID NOT NULL REFERENCES product(id) ON DELETE CASCADE,
  batch_code          VARCHAR(100) NOT NULL,
  expiry_date         DATE,
  manufacturing_date DATE,
  received_date       DATE,
  lot_number          VARCHAR(100),
  supplier_batch_code VARCHAR(100),
  batch_status        batch_status NOT NULL DEFAULT 'AVAILABLE',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (product_id, batch_code)
);

CREATE TRIGGER batch_updated_at
  BEFORE UPDATE ON batch
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_batch_status ON batch(batch_status);

-- =============================================================================
-- DOMAIN 5 (partial): Billing master data
-- =============================================================================

CREATE TABLE billing_plan (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_name         VARCHAR(100) NOT NULL UNIQUE,
  storage_included  NUMERIC(18,4),
  billing_cycle     billing_cycle_enum NOT NULL,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER billing_plan_updated_at
  BEFORE UPDATE ON billing_plan
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE vas (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(50) NOT NULL UNIQUE,
  name              VARCHAR(255) NOT NULL,
  description       TEXT,
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER vas_updated_at
  BEFORE UPDATE ON vas
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Change 12: vas_pricing extended with pricing_method, base_uom_id, min_charge_cents,
-- billing_unit, rule_json for flexible pricing (fixed, per unit, per volume/weight, custom).
CREATE TABLE vas_pricing (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vas_id            UUID NOT NULL REFERENCES vas(id) ON DELETE CASCADE,
  billing_plan_id   UUID NOT NULL REFERENCES billing_plan(id) ON DELETE CASCADE,
  pricing_method    pricing_method NOT NULL DEFAULT 'FIXED',
  rate_cents        BIGINT NOT NULL,
  base_uom_id       UUID REFERENCES uom(id) ON DELETE SET NULL,
  min_charge_cents  BIGINT,
  billing_unit      VARCHAR(50),
  rule_json         JSONB DEFAULT '{}',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (vas_id, billing_plan_id)
);

CREATE TRIGGER vas_pricing_updated_at
  BEFORE UPDATE ON vas_pricing
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Change 17: client_billing_plan links clients to plans with validity and current flag.
CREATE TABLE client_billing_plan (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE CASCADE,
  billing_plan_id   UUID NOT NULL REFERENCES billing_plan(id) ON DELETE RESTRICT,
  starts_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ends_at           TIMESTAMPTZ,
  is_current        BOOLEAN NOT NULL DEFAULT TRUE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER client_billing_plan_updated_at
  BEFORE UPDATE ON client_billing_plan
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_client_billing_plan_client ON client_billing_plan(client_id);
CREATE UNIQUE INDEX idx_client_billing_plan_current ON client_billing_plan(client_id) WHERE is_current = TRUE;

-- =============================================================================
-- DOMAIN 3: Core Operations (Orders & Fulfillment)
-- =============================================================================

-- Change 3: created_by_actor_id (FK to actor) instead of created_by_id + creator_type.
CREATE TABLE inbound_order (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  order_number      VARCHAR(50),
  status            order_status NOT NULL DEFAULT 'DRAFT',
  current_stage     VARCHAR(100),
  expected_date     DATE,
  created_by_actor_id UUID NOT NULL REFERENCES actor(id) ON DELETE RESTRICT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER inbound_order_updated_at
  BEFORE UPDATE ON inbound_order
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_inbound_order_client_warehouse ON inbound_order(client_id, warehouse_id);

CREATE TABLE inbound_order_item (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inbound_order_id   UUID NOT NULL REFERENCES inbound_order(id) ON DELETE CASCADE,
  product_id        UUID NOT NULL REFERENCES product(id) ON DELETE RESTRICT,
  qty_ordered       NUMERIC(18,4) NOT NULL,
  qty_received      NUMERIC(18,4) NOT NULL DEFAULT 0,
  uom_id            UUID NOT NULL REFERENCES uom(id) ON DELETE RESTRICT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER inbound_order_item_updated_at
  BEFORE UPDATE ON inbound_order_item
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_inbound_order_item_order ON inbound_order_item(inbound_order_id);

CREATE TABLE inbound_order_item_batch (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inbound_order_item_id UUID NOT NULL REFERENCES inbound_order_item(id) ON DELETE CASCADE,
  batch_id              UUID REFERENCES batch(id) ON DELETE SET NULL,
  location_id           UUID REFERENCES location(id) ON DELETE SET NULL,
  qty_received          NUMERIC(18,4) NOT NULL DEFAULT 0,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER inbound_order_item_batch_updated_at
  BEFORE UPDATE ON inbound_order_item_batch
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_inbound_order_item_batch_item ON inbound_order_item_batch(inbound_order_item_id);

CREATE TABLE outbound_order (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  order_number      VARCHAR(50),
  status            order_status NOT NULL DEFAULT 'DRAFT',
  current_stage     VARCHAR(100),
  expected_ship_date DATE,
  created_by_actor_id UUID NOT NULL REFERENCES actor(id) ON DELETE RESTRICT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER outbound_order_updated_at
  BEFORE UPDATE ON outbound_order
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_outbound_order_client_warehouse ON outbound_order(client_id, warehouse_id);

CREATE TABLE outbound_order_item (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  outbound_order_id UUID NOT NULL REFERENCES outbound_order(id) ON DELETE CASCADE,
  product_id        UUID NOT NULL REFERENCES product(id) ON DELETE RESTRICT,
  qty_ordered       NUMERIC(18,4) NOT NULL,
  qty_shipped       NUMERIC(18,4) NOT NULL DEFAULT 0,
  uom_id            UUID NOT NULL REFERENCES uom(id) ON DELETE RESTRICT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER outbound_order_item_updated_at
  BEFORE UPDATE ON outbound_order_item
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_outbound_order_item_order ON outbound_order_item(outbound_order_id);

CREATE TABLE outbound_order_item_batch (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  outbound_order_item_id  UUID NOT NULL REFERENCES outbound_order_item(id) ON DELETE CASCADE,
  batch_id                UUID REFERENCES batch(id) ON DELETE SET NULL,
  location_id             UUID REFERENCES location(id) ON DELETE SET NULL,
  qty_shipped             NUMERIC(18,4) NOT NULL DEFAULT 0,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER outbound_order_item_batch_updated_at
  BEFORE UPDATE ON outbound_order_item_batch
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_outbound_order_item_batch_item ON outbound_order_item_batch(outbound_order_item_id);

-- Change 2: Stock reservation and outbound allocation for reserved/picked/shipped tracking.
CREATE TABLE stock_reservation (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  outbound_order_id UUID NOT NULL REFERENCES outbound_order(id) ON DELETE CASCADE,
  status            reservation_status NOT NULL DEFAULT 'DRAFT',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER stock_reservation_updated_at
  BEFORE UPDATE ON stock_reservation
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_stock_reservation_order ON stock_reservation(outbound_order_id);
CREATE INDEX idx_stock_reservation_client_warehouse ON stock_reservation(client_id, warehouse_id);

CREATE TABLE outbound_allocation (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stock_reservation_id   UUID NOT NULL REFERENCES stock_reservation(id) ON DELETE CASCADE,
  outbound_order_item_id UUID NOT NULL REFERENCES outbound_order_item(id) ON DELETE CASCADE,
  client_id              UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id            UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  product_id             UUID NOT NULL REFERENCES product(id) ON DELETE RESTRICT,
  batch_id               UUID REFERENCES batch(id) ON DELETE SET NULL,
  location_id            UUID REFERENCES location(id) ON DELETE SET NULL,
  reserved_qty           NUMERIC(18,4) NOT NULL DEFAULT 0,
  picked_qty             NUMERIC(18,4) NOT NULL DEFAULT 0,
  shipped_qty            NUMERIC(18,4) NOT NULL DEFAULT 0,
  status                 allocation_status NOT NULL DEFAULT 'RESERVED',
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER outbound_allocation_updated_at
  BEFORE UPDATE ON outbound_allocation
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_outbound_allocation_reservation ON outbound_allocation(stock_reservation_id);
CREATE INDEX idx_outbound_allocation_item ON outbound_allocation(outbound_order_item_id);
CREATE INDEX idx_outbound_allocation_lookup ON outbound_allocation(client_id, warehouse_id, product_id);

-- Change 5 & 6: reference_type, reference_item_id; status uses task_status enum.
CREATE TABLE task_work_order (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  task_type         task_type NOT NULL,
  reference_type    VARCHAR(50),
  reference_id      UUID,
  reference_item_id UUID,
  assigned_user_id  UUID REFERENCES users(id) ON DELETE SET NULL,
  priority          task_priority NOT NULL DEFAULT 'NORMAL',
  status            task_status NOT NULL DEFAULT 'PENDING',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER task_work_order_updated_at
  BEFORE UPDATE ON task_work_order
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_task_work_order_client_warehouse ON task_work_order(client_id, warehouse_id);
CREATE INDEX idx_task_work_order_reference ON task_work_order(reference_type, reference_id);
CREATE INDEX idx_task_work_order_reference_item ON task_work_order(reference_type, reference_item_id);

CREATE TABLE adjustment (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  product_id        UUID REFERENCES product(id) ON DELETE SET NULL,
  batch_id          UUID REFERENCES batch(id) ON DELETE SET NULL,
  location_id       UUID REFERENCES location(id) ON DELETE SET NULL,
  qty_change        NUMERIC(18,4) NOT NULL,
  reason            TEXT,
  status            adjustment_status NOT NULL DEFAULT 'PENDING',
  created_by_actor_id UUID NOT NULL REFERENCES actor(id) ON DELETE RESTRICT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER adjustment_updated_at
  BEFORE UPDATE ON adjustment
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_adjustment_client_warehouse ON adjustment(client_id, warehouse_id);

-- Change 16: Renamed from "return" to return_order to avoid SQL keyword.
CREATE TABLE return_order (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  outbound_order_id UUID NOT NULL REFERENCES outbound_order(id) ON DELETE RESTRICT,
  return_number     VARCHAR(50) NOT NULL,
  product_id        UUID NOT NULL REFERENCES product(id) ON DELETE RESTRICT,
  batch_id          UUID REFERENCES batch(id) ON DELETE SET NULL,
  qty               NUMERIC(18,4) NOT NULL,
  disposition       return_disposition NOT NULL DEFAULT 'RESTOCK',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER return_order_updated_at
  BEFORE UPDATE ON return_order
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_return_order_client_warehouse ON return_order(client_id, warehouse_id);
CREATE INDEX idx_return_order_outbound ON return_order(outbound_order_id);

-- Change 4: Approval workflow enhanced; requested_by_actor_id, approved_by_actor_id.
CREATE TABLE approval (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_type        approval_reference_type NOT NULL,
  reference_id          UUID NOT NULL,
  approval_step         VARCHAR(50) NOT NULL DEFAULT 'INITIAL',
  sequence_no           INTEGER NOT NULL DEFAULT 1,
  requested_by_actor_id UUID NOT NULL REFERENCES actor(id) ON DELETE RESTRICT,
  approved_by_actor_id  UUID REFERENCES actor(id) ON DELETE SET NULL,
  status                approval_status NOT NULL DEFAULT 'PENDING',
  request_notes         TEXT,
  decision_notes        TEXT,
  decision_at           TIMESTAMPTZ,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER approval_updated_at
  BEFORE UPDATE ON approval
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_approval_reference ON approval(reference_type, reference_id);
CREATE INDEX idx_approval_requested ON approval(requested_by_actor_id);

-- =============================================================================
-- DOMAIN 4: Inventory Tracking
-- =============================================================================

CREATE TABLE inventory_ledger (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE RESTRICT,
  product_id        UUID NOT NULL REFERENCES product(id) ON DELETE RESTRICT,
  batch_id          UUID REFERENCES batch(id) ON DELETE SET NULL,
  location_id       UUID REFERENCES location(id) ON DELETE SET NULL,
  movement_type     movement_type NOT NULL,
  qty_change        NUMERIC(18,4) NOT NULL,
  qty_before        NUMERIC(18,4) NOT NULL,
  qty_after         NUMERIC(18,4) NOT NULL,
  reference_type    VARCHAR(50),
  reference_id      UUID,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER inventory_ledger_prevent_update
  BEFORE UPDATE ON inventory_ledger
  FOR EACH ROW EXECUTE FUNCTION prevent_ledger_modification();

CREATE TRIGGER inventory_ledger_prevent_delete
  BEFORE DELETE ON inventory_ledger
  FOR EACH ROW EXECUTE FUNCTION prevent_ledger_modification();

CREATE INDEX idx_inventory_ledger_lookup ON inventory_ledger(client_id, warehouse_id, product_id, created_at);

-- Change 8 & 9: current_stock is a DERIVED snapshot from inventory_ledger only.
-- Source of truth is inventory_ledger. quantity >= 0 enforced. Direct writes blocked by trigger.
CREATE TABLE current_stock (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE CASCADE,
  warehouse_id      UUID NOT NULL REFERENCES warehouse(id) ON DELETE CASCADE,
  product_id        UUID NOT NULL REFERENCES product(id) ON DELETE CASCADE,
  batch_id          UUID REFERENCES batch(id) ON DELETE CASCADE,
  location_id       UUID REFERENCES location(id) ON DELETE CASCADE,
  quantity          NUMERIC(18,4) NOT NULL DEFAULT 0,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_current_stock_quantity_non_negative CHECK (quantity >= 0)
);

CREATE UNIQUE INDEX idx_current_stock_unique ON current_stock (
  client_id,
  warehouse_id,
  product_id,
  COALESCE(batch_id, '00000000-0000-0000-0000-000000000000'::uuid),
  COALESCE(location_id, '00000000-0000-0000-0000-000000000000'::uuid)
);

CREATE TRIGGER current_stock_updated_at
  BEFORE UPDATE ON current_stock
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER current_stock_prevent_insert
  BEFORE INSERT ON current_stock
  FOR EACH ROW EXECUTE FUNCTION prevent_current_stock_direct_write();

CREATE TRIGGER current_stock_prevent_update
  BEFORE UPDATE ON current_stock
  FOR EACH ROW EXECUTE FUNCTION prevent_current_stock_direct_write();

CREATE TRIGGER current_stock_prevent_delete
  BEFORE DELETE ON current_stock
  FOR EACH ROW EXECUTE FUNCTION prevent_current_stock_direct_write();

CREATE TRIGGER inventory_ledger_sync_current_stock
  AFTER INSERT ON inventory_ledger
  FOR EACH ROW EXECUTE FUNCTION sync_current_stock_on_ledger_insert();

CREATE INDEX idx_current_stock_lookup ON current_stock(client_id, warehouse_id, product_id);

-- =============================================================================
-- DOMAIN 5: Billing & Finance
-- =============================================================================

-- Change 13: Invoice snapshot with subtotal, tax, discount, due_date, issued_at, paid_at, notes.
CREATE TABLE invoice (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id          UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  invoice_number     VARCHAR(50) NOT NULL UNIQUE,
  period_start       DATE NOT NULL,
  period_end         DATE NOT NULL,
  subtotal_cents     BIGINT NOT NULL DEFAULT 0,
  tax_amount_cents   BIGINT NOT NULL DEFAULT 0,
  discount_amount_cents BIGINT NOT NULL DEFAULT 0,
  total_amount_cents BIGINT NOT NULL DEFAULT 0,
  currency           CHAR(3) NOT NULL DEFAULT 'USD',
  status             invoice_status NOT NULL DEFAULT 'DRAFT',
  due_date           DATE,
  issued_at          TIMESTAMPTZ,
  paid_at            TIMESTAMPTZ,
  notes              TEXT,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER invoice_updated_at
  BEFORE UPDATE ON invoice
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_invoice_client ON invoice(client_id);

-- Change 14: invoice_line traceability via reference_type, reference_id.
CREATE TABLE invoice_line (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id         UUID NOT NULL REFERENCES invoice(id) ON DELETE CASCADE,
  charge_category    charge_category NOT NULL,
  description        TEXT,
  quantity           NUMERIC(18,4) NOT NULL DEFAULT 0,
  unit_price_cents   BIGINT NOT NULL,
  total_amount_cents BIGINT NOT NULL,
  currency           CHAR(3) NOT NULL DEFAULT 'USD',
  reference_type     VARCHAR(100),
  reference_id       UUID,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER invoice_line_updated_at
  BEFORE UPDATE ON invoice_line
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_invoice_line_invoice ON invoice_line(invoice_id);
CREATE INDEX idx_invoice_line_reference ON invoice_line(reference_type, reference_id);

-- Change 1: Renamed from "transaction" to billing_transaction (reserved word + domain clarity).
CREATE TABLE billing_transaction (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id         UUID NOT NULL REFERENCES client(id) ON DELETE RESTRICT,
  invoice_id        UUID REFERENCES invoice(id) ON DELETE SET NULL,
  charge_category   charge_category NOT NULL,
  description       TEXT,
  amount_cents      BIGINT NOT NULL,
  currency          CHAR(3) NOT NULL DEFAULT 'USD',
  reference_type    VARCHAR(100),
  reference_id      UUID,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_billing_transaction_client ON billing_transaction(client_id);
CREATE INDEX idx_billing_transaction_invoice ON billing_transaction(invoice_id);
CREATE INDEX idx_billing_transaction_reference ON billing_transaction(reference_type, reference_id);

-- =============================================================================
-- DOMAIN 6: System Audit
-- =============================================================================

-- Change 15: audit_log is immutable; no updated_at; UPDATE/DELETE blocked.
-- Change 3: actor_id references actor(id); nullable so logs remain if actor deleted.
CREATE TABLE audit_log (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id          UUID REFERENCES actor(id) ON DELETE SET NULL,
  action            VARCHAR(100) NOT NULL,
  resource_type     VARCHAR(100) NOT NULL,
  resource_id       UUID,
  ip_address        INET,
  details_json      JSONB DEFAULT '{}',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER audit_log_prevent_update
  BEFORE UPDATE ON audit_log
  FOR EACH ROW EXECUTE FUNCTION prevent_audit_log_modification();

CREATE TRIGGER audit_log_prevent_delete
  BEFORE DELETE ON audit_log
  FOR EACH ROW EXECUTE FUNCTION prevent_audit_log_modification();

CREATE INDEX idx_audit_log_actor ON audit_log(actor_id);
CREATE INDEX idx_audit_log_resource ON audit_log(resource_type, resource_id);
CREATE INDEX idx_audit_log_created ON audit_log(created_at);

-- =============================================================================
-- End of schema
-- =============================================================================

-- -----------------------------------------------------------------------------
-- MIGRATION NOTES (when applying over an existing database)
-- -----------------------------------------------------------------------------
-- 1. transaction -> billing_transaction: Rename table and indexes; update any
--    application code or views that reference "transaction".
-- 2. actor: Create actor table; backfill one actor per user (INTERNAL_USER) and
--    one per client_account (CLIENT_ACCOUNT). Optionally create a SYSTEM actor.
--    Then add created_by_actor_id to inbound_order, outbound_order, adjustment
--    (populate from existing created_by_id + creator_type), and approval
--    (requested_by_actor_id, approved_by_actor_id). Finally drop created_by_id,
--    creator_type from orders and adjustment; drop requested_by_id, approved_by_id
--    from approval.
-- 3. return -> return_order: Rename table and indexes; update FKs in approval
--    reference_type if stored as table name anywhere.
-- 4. warehouse/location: Add capacity_value, capacity_uom_id; migrate
--    capacity_units -> capacity_value (same numeric), set capacity_uom_id from
--    a default uom if needed; drop capacity_units.
-- 5. uom: Add dimension column; backfill (e.g. COUNT for EA, WEIGHT for KG, etc.).
-- 6. batch: Add new columns with defaults; batch_status DEFAULT 'AVAILABLE'.
-- 7. task_work_order: Add reference_type, reference_item_id; change status column
--    to task_status enum (map existing order_status values to task_status).
-- 8. current_stock: Add CHECK(quantity >= 0); backfill or fix any negative
--    rows from ledger first. Then add write-protection triggers; ensure sync
--    function sets app.allow_current_stock_write.
-- 9. audit_log: Add actor_id FK to actor; backfill from actor_type + old actor_id;
--    remove updated_at and update trigger; add prevent UPDATE/DELETE triggers.
-- 10. invoice/invoice_line, vas_pricing, client_billing_plan, stock_reservation,
--     outbound_allocation: New or extended tables; deploy with defaults where needed.

-- -----------------------------------------------------------------------------
-- APPLICATION-LAYER TODOs / CAVEATS
-- -----------------------------------------------------------------------------
-- 1. Actor lifecycle: When creating a new user or client_account, create a
--    corresponding actor row (INTERNAL_USER or CLIENT_ACCOUNT). Use actor_id
--    in inbound_order, outbound_order, adjustment, approval, and audit_log.
-- 2. current_stock: Never INSERT/UPDATE/DELETE from application code. Only
--    insert into inventory_ledger; the trigger updates current_stock. Service
--    layer should validate that ledger entries do not drive quantity below zero
--    (e.g. reject picks that would make current_stock negative).
-- 3. Stock reservation: Application should reserve against current_stock
--    (available = quantity - reserved from outbound_allocation) and create
--    outbound_allocation rows when allocating; update picked_qty/shipped_qty
--    as execution progresses.
-- 4. Batch client_id: Optional denormalization (client_id on batch) for
--    reporting; if added, keep in sync with product.client_id via app or trigger.
-- 5. approval sequence_no: Use for multi-step workflows; ensure uniqueness per
--    (reference_type, reference_id) when implementing multi-step approval.
</think>
Reordering so `uom` is created before `warehouse` and `location` (for `capacity_uom_id`). Checking the current order and fixing it.
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
Read