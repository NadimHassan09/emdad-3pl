-- =============================================================================
-- finalschema.sql
-- 3PL Warehouse Management System — PostgreSQL Schema
-- Dialect : PostgreSQL 14+
-- Generated from: server/prisma/schema.prisma (current state)
--
-- Recent modifications reflected:
--   • BillingPlan   — added inbound/outbound item & weight fee columns (billing)
--   • ChargeCategory enum — added PLAN_FEE value
--   • Approval      — added approvalStep used by ORDER flow
--   • InboundOrder / OutboundOrder — status default changed (PENDING for client,
--     IN_PROGRESS for admin-created)
-- =============================================================================

-- ---------------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "pgcrypto";  -- provides gen_random_uuid()


-- ===========================================================================
-- DROP existing objects (reverse dependency order)
-- ===========================================================================

-- Billing / Finance
DROP TABLE IF EXISTS billing_transaction   CASCADE;
DROP TABLE IF EXISTS invoice_line          CASCADE;
DROP TABLE IF EXISTS invoice               CASCADE;
DROP TABLE IF EXISTS client_billing_plan   CASCADE;
DROP TABLE IF EXISTS vas_pricing           CASCADE;
DROP TABLE IF EXISTS vas                   CASCADE;
DROP TABLE IF EXISTS billing_plan          CASCADE;

-- Audit
DROP TABLE IF EXISTS audit_log             CASCADE;

-- Approvals
DROP TABLE IF EXISTS approval              CASCADE;

-- Operations
DROP TABLE IF EXISTS return_order          CASCADE;
DROP TABLE IF EXISTS adjustment            CASCADE;
DROP TABLE IF EXISTS task_work_order       CASCADE;
DROP TABLE IF EXISTS outbound_allocation   CASCADE;
DROP TABLE IF EXISTS stock_reservation     CASCADE;
DROP TABLE IF EXISTS outbound_order_item_batch CASCADE;
DROP TABLE IF EXISTS outbound_order_item   CASCADE;
DROP TABLE IF EXISTS outbound_order        CASCADE;
DROP TABLE IF EXISTS inbound_order_item_batch  CASCADE;
DROP TABLE IF EXISTS inbound_order_item    CASCADE;
DROP TABLE IF EXISTS inbound_order         CASCADE;

-- Inventory
DROP TABLE IF EXISTS current_stock         CASCADE;
DROP TABLE IF EXISTS inventory_ledger      CASCADE;

-- Master Data
DROP TABLE IF EXISTS batch                 CASCADE;
DROP TABLE IF EXISTS product               CASCADE;
DROP TABLE IF EXISTS location              CASCADE;
DROP TABLE IF EXISTS warehouse             CASCADE;
DROP TABLE IF EXISTS uom                   CASCADE;

-- IAM
DROP TABLE IF EXISTS audit_log             CASCADE;
DROP TABLE IF EXISTS actor                 CASCADE;
DROP TABLE IF EXISTS "users"               CASCADE;
DROP TABLE IF EXISTS user_roles            CASCADE;
DROP TABLE IF EXISTS client_account        CASCADE;
DROP TABLE IF EXISTS client_roles          CASCADE;
DROP TABLE IF EXISTS client_notification   CASCADE;
DROP TABLE IF EXISTS client                CASCADE;

-- Enum types
DROP TYPE IF EXISTS charge_category         CASCADE;
DROP TYPE IF EXISTS invoice_status          CASCADE;
DROP TYPE IF EXISTS pricing_method          CASCADE;
DROP TYPE IF EXISTS billing_cycle_enum      CASCADE;
DROP TYPE IF EXISTS approval_reference_type CASCADE;
DROP TYPE IF EXISTS approval_status         CASCADE;
DROP TYPE IF EXISTS return_disposition      CASCADE;
DROP TYPE IF EXISTS adjustment_status       CASCADE;
DROP TYPE IF EXISTS task_priority           CASCADE;
DROP TYPE IF EXISTS task_status             CASCADE;
DROP TYPE IF EXISTS task_type               CASCADE;
DROP TYPE IF EXISTS order_status            CASCADE;
DROP TYPE IF EXISTS movement_type           CASCADE;
DROP TYPE IF EXISTS batch_status            CASCADE;
DROP TYPE IF EXISTS location_type           CASCADE;
DROP TYPE IF EXISTS uom_dimension           CASCADE;
DROP TYPE IF EXISTS actor_type              CASCADE;
DROP TYPE IF EXISTS client_status           CASCADE;


-- ===========================================================================
-- ENUM TYPES
-- ===========================================================================

-- Client lifecycle status
CREATE TYPE client_status AS ENUM (
    'ACTIVE',
    'SUSPENDED',
    'CLOSED'
);

-- Distinguishes internal staff from client portal users
CREATE TYPE actor_type AS ENUM (
    'INTERNAL_USER',
    'CLIENT_ACCOUNT',
    'SYSTEM'
);

-- Physical dimension tracked by a unit of measure
CREATE TYPE uom_dimension AS ENUM (
    'COUNT',
    'LENGTH',
    'WEIGHT',
    'VOLUME',
    'TEMPERATURE'
);

-- Warehouse location node type in the hierarchy
CREATE TYPE location_type AS ENUM (
    'ZONE',
    'AISLE',
    'RACK',
    'BIN',
    'STAGING'
);

-- Lifecycle state of a product batch
CREATE TYPE batch_status AS ENUM (
    'AVAILABLE',
    'HOLD',
    'QUARANTINE',
    'EXPIRED',
    'CONSUMED'
);

-- Inventory ledger movement types (double-entry-style)
CREATE TYPE movement_type AS ENUM (
    'RECEIPT',
    'PUTAWAY',
    'PICK',
    'SHIPMENT',
    'ADJUSTMENT',
    'TRANSFER_IN',
    'TRANSFER_OUT',
    'RETURN',
    'CYCLE_COUNT'
);

-- Unified order lifecycle status for inbound & outbound orders
-- PENDING   → client-created, awaiting admin approval
-- IN_PROGRESS → admin-approved or admin-created (active)
CREATE TYPE order_status AS ENUM (
    'DRAFT',
    'PENDING',
    'CONFIRMED',
    'IN_PROGRESS',
    'RECEIVING',
    'SHIPPED',
    'COMPLETED',
    'CANCELLED'
);

-- Warehouse task types
CREATE TYPE task_type AS ENUM (
    'RECEIVING',
    'PUTAWAY',
    'PICKING',
    'PACKING',
    'SHIPPING',
    'CYCLE_COUNT',
    'REPLENISHMENT',
    'ADJUSTMENT'
);

-- Warehouse task execution states
CREATE TYPE task_status AS ENUM (
    'PENDING',
    'ASSIGNED',
    'IN_PROGRESS',
    'COMPLETED',
    'CANCELLED'
);

-- Task scheduling priority
CREATE TYPE task_priority AS ENUM (
    'LOW',
    'NORMAL',
    'HIGH',
    'URGENT'
);

-- Stock adjustment workflow state
CREATE TYPE adjustment_status AS ENUM (
    'PENDING',
    'APPROVED',
    'REJECTED',
    'APPLIED'
);

-- How a returned item is handled
CREATE TYPE return_disposition AS ENUM (
    'RESTOCK',
    'DAMAGED',
    'QUARANTINE',
    'DISPOSAL'
);

-- Stock reservation lifecycle
CREATE TYPE reservation_status AS ENUM (
    'DRAFT',
    'CONFIRMED',
    'RELEASED',
    'CANCELLED'
);

-- Per-line allocation status within a reservation
CREATE TYPE allocation_status AS ENUM (
    'RESERVED',
    'PARTIALLY_PICKED',
    'PICKED',
    'PARTIALLY_SHIPPED',
    'SHIPPED',
    'CANCELLED'
);

-- Approval workflow outcome
CREATE TYPE approval_status AS ENUM (
    'PENDING',
    'APPROVED',
    'REJECTED'
);

-- Entity types that can be routed through the approval workflow
CREATE TYPE approval_reference_type AS ENUM (
    'ADJUSTMENT',
    'RETURN',
    'INVOICE',
    'ORDER'
);

-- Billing plan recurrence interval
CREATE TYPE billing_cycle_enum AS ENUM (
    'WEEKLY',
    'MONTHLY',
    'QUARTERLY',
    'ANNUALLY'
);

-- VAS pricing calculation method
CREATE TYPE pricing_method AS ENUM (
    'FIXED',
    'PER_UNIT',
    'PER_VOLUME',
    'PER_WEIGHT',
    'CUSTOM'
);

-- Invoice document lifecycle
CREATE TYPE invoice_status AS ENUM (
    'DRAFT',
    'ISSUED',
    'PAID',
    'OVERDUE',
    'CANCELLED'
);

-- Billing transaction category
-- PLAN_FEE added after billing refactor
CREATE TYPE charge_category AS ENUM (
    'STORAGE',
    'MOVEMENT',
    'VAS',
    'PLAN_FEE',
    'MANUAL_CREDIT',
    'MANUAL_CHARGE'
);


-- ===========================================================================
-- IAM — Identity & Access Management
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- client
-- Represents a company (tenant) using the 3PL service.
-- ---------------------------------------------------------------------------
CREATE TABLE client (
    id             UUID          NOT NULL DEFAULT gen_random_uuid(),
    code           VARCHAR(50)   NOT NULL,                          -- short unique identifier, e.g. "ACME"
    name           VARCHAR(255)  NOT NULL,
    contact_email  VARCHAR(255),
    contact_phone  VARCHAR(50),
    address_line1  VARCHAR(255),
    city           VARCHAR(100),
    state_region   VARCHAR(100),
    postal_code    VARCHAR(20),
    country_code   CHAR(2),
    balance_cents  BIGINT        NOT NULL DEFAULT 0,                -- ledger balance in cents
    currency       CHAR(3)       NOT NULL DEFAULT 'USD',
    status         client_status NOT NULL DEFAULT 'ACTIVE',
    is_active      BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_client PRIMARY KEY (id),
    CONSTRAINT uq_client_code UNIQUE (code)
);

-- ---------------------------------------------------------------------------
-- client_notification
-- In-app notifications sent to a client.
-- ---------------------------------------------------------------------------
CREATE TABLE client_notification (
    id              UUID          NOT NULL DEFAULT gen_random_uuid(),
    client_id       UUID          NOT NULL,
    title           VARCHAR(255)  NOT NULL,
    message         TEXT          NOT NULL,
    importance      VARCHAR(20)   NOT NULL DEFAULT 'MEDIUM',        -- LOW | MEDIUM | HIGH | CRITICAL
    reference_type  VARCHAR(100),                                   -- entity type linked to this notification
    reference_id    VARCHAR(255),                                   -- entity ID linked to this notification
    is_read         BOOLEAN       NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_client_notification PRIMARY KEY (id),
    CONSTRAINT fk_cn_client FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE CASCADE
);

CREATE INDEX idx_client_notification_client  ON client_notification (client_id);
CREATE INDEX idx_client_notification_unread  ON client_notification (client_id, is_read);

-- ---------------------------------------------------------------------------
-- client_roles
-- Permission sets assignable to client portal accounts.
-- ---------------------------------------------------------------------------
CREATE TABLE client_roles (
    id               UUID         NOT NULL DEFAULT gen_random_uuid(),
    role_name        VARCHAR(100) NOT NULL,
    permissions_json JSONB        NOT NULL DEFAULT '{}',
    is_active        BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_client_roles PRIMARY KEY (id),
    CONSTRAINT uq_client_roles_name UNIQUE (role_name)
);

-- ---------------------------------------------------------------------------
-- client_account
-- Portal login account that belongs to a specific client company.
-- ---------------------------------------------------------------------------
CREATE TABLE client_account (
    id              UUID         NOT NULL DEFAULT gen_random_uuid(),
    client_id       UUID         NOT NULL,
    client_role_id  UUID         NOT NULL,
    email           VARCHAR(255) NOT NULL,
    password_hash   VARCHAR(255),
    first_name      VARCHAR(100) NOT NULL,
    last_name       VARCHAR(100) NOT NULL,
    is_active       BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_client_account PRIMARY KEY (id),
    CONSTRAINT uq_client_account_email UNIQUE (email),
    CONSTRAINT fk_ca_client      FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ca_role        FOREIGN KEY (client_role_id)
        REFERENCES client_roles (id) ON DELETE RESTRICT
);

CREATE INDEX idx_client_account_client ON client_account (client_id);

-- ---------------------------------------------------------------------------
-- user_roles
-- Permission sets assignable to internal staff users.
-- ---------------------------------------------------------------------------
CREATE TABLE user_roles (
    id               UUID         NOT NULL DEFAULT gen_random_uuid(),
    role_name        VARCHAR(100) NOT NULL,
    permissions_json JSONB        NOT NULL DEFAULT '{}',
    is_active        BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_user_roles PRIMARY KEY (id),
    CONSTRAINT uq_user_roles_name UNIQUE (role_name)
);

-- ---------------------------------------------------------------------------
-- uom  (defined before warehouse/users to avoid forward-reference)
-- Unit of measure master. base_conversion normalises to SI base unit.
-- ---------------------------------------------------------------------------
CREATE TABLE uom (
    id               UUID          NOT NULL DEFAULT gen_random_uuid(),
    code             VARCHAR(20)   NOT NULL,
    name             VARCHAR(100)  NOT NULL,
    dimension        uom_dimension NOT NULL,
    base_conversion  DECIMAL(18,6) NOT NULL DEFAULT 1,              -- multiplier to convert to SI base
    is_active        BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_uom PRIMARY KEY (id),
    CONSTRAINT uq_uom_code UNIQUE (code)
);

-- ---------------------------------------------------------------------------
-- warehouse
-- Physical warehouse facility.
-- ---------------------------------------------------------------------------
CREATE TABLE warehouse (
    id               UUID          NOT NULL DEFAULT gen_random_uuid(),
    code             VARCHAR(50)   NOT NULL,
    name             VARCHAR(255)  NOT NULL,
    capacity_value   DECIMAL(18,4),
    capacity_uom_id  UUID,                                          -- FK → uom
    is_active        BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_warehouse PRIMARY KEY (id),
    CONSTRAINT uq_warehouse_code UNIQUE (code),
    CONSTRAINT fk_warehouse_capacity_uom FOREIGN KEY (capacity_uom_id)
        REFERENCES uom (id) ON DELETE SET NULL
);

-- ---------------------------------------------------------------------------
-- users
-- Internal staff / warehouse workers.
-- ---------------------------------------------------------------------------
CREATE TABLE "users" (
    id               UUID         NOT NULL DEFAULT gen_random_uuid(),
    email            VARCHAR(255) NOT NULL,
    password_hash    VARCHAR(255),
    first_name       VARCHAR(100) NOT NULL,
    last_name        VARCHAR(100) NOT NULL,
    internal_role_id UUID,                                          -- FK → user_roles
    warehouse_id     UUID,                                          -- home warehouse
    is_active        BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uq_users_email UNIQUE (email),
    CONSTRAINT fk_users_role      FOREIGN KEY (internal_role_id)
        REFERENCES user_roles (id) ON DELETE SET NULL,
    CONSTRAINT fk_users_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE SET NULL
);

CREATE INDEX idx_users_role      ON "users" (internal_role_id);
CREATE INDEX idx_users_warehouse ON "users" (warehouse_id);

-- ---------------------------------------------------------------------------
-- actor
-- Polymorphic identity record — links either a user or a client_account.
-- Every action-taker in the system is represented as an actor.
-- ---------------------------------------------------------------------------
CREATE TABLE actor (
    id                  UUID        NOT NULL DEFAULT gen_random_uuid(),
    actor_type          actor_type  NOT NULL,
    user_id             UUID        UNIQUE,                         -- set when actor_type = INTERNAL_USER
    client_account_id   UUID        UNIQUE,                        -- set when actor_type = CLIENT_ACCOUNT
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_actor PRIMARY KEY (id),
    CONSTRAINT fk_actor_user           FOREIGN KEY (user_id)
        REFERENCES "users" (id) ON DELETE CASCADE,
    CONSTRAINT fk_actor_client_account FOREIGN KEY (client_account_id)
        REFERENCES client_account (id) ON DELETE CASCADE
);

CREATE INDEX idx_actor_type ON actor (actor_type);


-- ===========================================================================
-- MASTER DATA
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- location
-- Node in the warehouse location hierarchy (zone → aisle → rack → bin).
-- code is unique within each warehouse (enforced by composite unique).
-- ---------------------------------------------------------------------------
CREATE TABLE location (
    id                  UUID          NOT NULL DEFAULT gen_random_uuid(),
    warehouse_id        UUID          NOT NULL,
    parent_location_id  UUID,                                       -- self-referential: NULL = root node
    code                VARCHAR(50)   NOT NULL,                     -- auto-generated: {WH_CODE}-{TYPE}-{RAND5}
    location_type       location_type NOT NULL,
    capacity_value      DECIMAL(18,4),
    capacity_uom_id     UUID,
    is_active           BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_location PRIMARY KEY (id),
    CONSTRAINT uq_location_warehouse_code UNIQUE (warehouse_id, code),
    CONSTRAINT fk_location_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE CASCADE,
    CONSTRAINT fk_location_parent   FOREIGN KEY (parent_location_id)
        REFERENCES location (id) ON DELETE CASCADE,
    CONSTRAINT fk_location_cap_uom  FOREIGN KEY (capacity_uom_id)
        REFERENCES uom (id) ON DELETE SET NULL
);

CREATE INDEX idx_location_warehouse_parent ON location (warehouse_id, parent_location_id);

-- ---------------------------------------------------------------------------
-- product
-- SKU-level product catalogue, scoped to each client.
-- ---------------------------------------------------------------------------
CREATE TABLE product (
    id                   UUID          NOT NULL DEFAULT gen_random_uuid(),
    client_id            UUID          NOT NULL,
    sku                  VARCHAR(100)  NOT NULL,
    name                 VARCHAR(255)  NOT NULL,
    description          TEXT,
    category             VARCHAR(100),
    brand                VARCHAR(100),
    price                DECIMAL(18,4),
    declared_value       DECIMAL(18,4),
    default_uom_id       UUID          NOT NULL,
    weight               DECIMAL(18,4) DEFAULT 0,                   -- kg
    length_cm            DECIMAL(18,4) DEFAULT 0,
    width_cm             DECIMAL(18,4) DEFAULT 0,
    height_cm            DECIMAL(18,4) DEFAULT 0,
    units_per_carton     INTEGER       DEFAULT 1,
    barcode              VARCHAR(100),
    is_serialized        BOOLEAN       NOT NULL DEFAULT FALSE,
    is_batch_tracked     BOOLEAN       NOT NULL DEFAULT FALSE,
    requires_expiry_date BOOLEAN       NOT NULL DEFAULT FALSE,
    min_threshold        DECIMAL(18,4) DEFAULT 0,
    reorder_point        DECIMAL(18,4),
    is_active            BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at           TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_product PRIMARY KEY (id),
    CONSTRAINT uq_product_client_sku UNIQUE (client_id, sku),
    CONSTRAINT fk_product_client  FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE CASCADE,
    CONSTRAINT fk_product_uom     FOREIGN KEY (default_uom_id)
        REFERENCES uom (id) ON DELETE RESTRICT
);

-- ---------------------------------------------------------------------------
-- batch
-- Batch / lot tracking record for a product.
-- ---------------------------------------------------------------------------
CREATE TABLE batch (
    id                   UUID         NOT NULL DEFAULT gen_random_uuid(),
    product_id           UUID         NOT NULL,
    batch_code           VARCHAR(100) NOT NULL,
    expiry_date          DATE,
    manufacturing_date   DATE,
    received_date        DATE,
    lot_number           VARCHAR(100),
    supplier_batch_code  VARCHAR(100),
    batch_status         batch_status NOT NULL DEFAULT 'AVAILABLE',
    created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_batch PRIMARY KEY (id),
    CONSTRAINT uq_batch_product_code UNIQUE (product_id, batch_code),
    CONSTRAINT fk_batch_product FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE CASCADE
);

CREATE INDEX idx_batch_status ON batch (batch_status);


-- ===========================================================================
-- INVENTORY TRACKING
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- inventory_ledger
-- Immutable append-only ledger of every stock movement.
-- qty_before / qty_after maintain the running balance per product/batch/location.
-- ---------------------------------------------------------------------------
CREATE TABLE inventory_ledger (
    id             UUID          NOT NULL DEFAULT gen_random_uuid(),
    client_id      UUID          NOT NULL,
    warehouse_id   UUID          NOT NULL,
    product_id     UUID          NOT NULL,
    batch_id       UUID,
    location_id    UUID,
    movement_type  movement_type NOT NULL,
    qty_change     DECIMAL(18,4) NOT NULL,                          -- positive = in, negative = out
    qty_before     DECIMAL(18,4) NOT NULL,
    qty_after      DECIMAL(18,4) NOT NULL,
    reference_type VARCHAR(50),                                     -- entity type that caused movement
    reference_id   UUID,                                            -- entity ID that caused movement
    created_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_inventory_ledger PRIMARY KEY (id),
    CONSTRAINT fk_il_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_il_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_il_product   FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE RESTRICT,
    CONSTRAINT fk_il_batch     FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL,
    CONSTRAINT fk_il_location  FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE SET NULL
);

CREATE INDEX idx_il_client_wh_product_date
    ON inventory_ledger (client_id, warehouse_id, product_id, created_at);

-- ---------------------------------------------------------------------------
-- current_stock
-- Materialised view of on-hand quantity per (client, warehouse, product,
-- batch, location) tuple. Updated on every ledger entry.
-- ---------------------------------------------------------------------------
CREATE TABLE current_stock (
    id           UUID          NOT NULL DEFAULT gen_random_uuid(),
    client_id    UUID          NOT NULL,
    warehouse_id UUID          NOT NULL,
    product_id   UUID          NOT NULL,
    batch_id     UUID,
    location_id  UUID,
    quantity     DECIMAL(18,4) NOT NULL DEFAULT 0,
    created_at   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_current_stock PRIMARY KEY (id),
    CONSTRAINT uq_current_stock UNIQUE (client_id, warehouse_id, product_id, batch_id, location_id),
    CONSTRAINT fk_cs_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE CASCADE,
    CONSTRAINT fk_cs_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE CASCADE,
    CONSTRAINT fk_cs_product   FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE CASCADE,
    CONSTRAINT fk_cs_batch     FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE CASCADE,
    CONSTRAINT fk_cs_location  FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE CASCADE
);

CREATE INDEX idx_current_stock_lookup
    ON current_stock (client_id, warehouse_id, product_id);


-- ===========================================================================
-- INBOUND ORDERS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- inbound_order
-- Header record for a goods-receipt / put-away request.
-- Client-created orders start as PENDING (awaiting approval).
-- Admin-created orders start as IN_PROGRESS (auto-approved).
-- ---------------------------------------------------------------------------
CREATE TABLE inbound_order (
    id                   UUID         NOT NULL DEFAULT gen_random_uuid(),
    client_id            UUID         NOT NULL,
    warehouse_id         UUID,
    order_number         VARCHAR(50),
    status               order_status NOT NULL DEFAULT 'DRAFT',
    current_stage        VARCHAR(100),
    expected_date        DATE,
    created_by_actor_id  UUID         NOT NULL,
    created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_inbound_order PRIMARY KEY (id),
    CONSTRAINT fk_io_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_io_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE SET NULL,
    CONSTRAINT fk_io_actor     FOREIGN KEY (created_by_actor_id)
        REFERENCES actor (id) ON DELETE RESTRICT
);

CREATE INDEX idx_inbound_order_client_wh ON inbound_order (client_id, warehouse_id);

-- ---------------------------------------------------------------------------
-- inbound_order_item
-- Line item within an inbound order.
-- ---------------------------------------------------------------------------
CREATE TABLE inbound_order_item (
    id               UUID          NOT NULL DEFAULT gen_random_uuid(),
    inbound_order_id UUID          NOT NULL,
    product_id       UUID          NOT NULL,
    qty_ordered      DECIMAL(18,4) NOT NULL,
    qty_received     DECIMAL(18,4) NOT NULL DEFAULT 0,
    uom_id           UUID          NOT NULL,
    created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_inbound_order_item PRIMARY KEY (id),
    CONSTRAINT fk_ioi_order   FOREIGN KEY (inbound_order_id)
        REFERENCES inbound_order (id) ON DELETE CASCADE,
    CONSTRAINT fk_ioi_product FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ioi_uom     FOREIGN KEY (uom_id)
        REFERENCES uom (id) ON DELETE RESTRICT
);

CREATE INDEX idx_inbound_order_item_order ON inbound_order_item (inbound_order_id);

-- ---------------------------------------------------------------------------
-- inbound_order_item_batch
-- Records received quantity per batch/location combination for an order item.
-- ---------------------------------------------------------------------------
CREATE TABLE inbound_order_item_batch (
    id                    UUID          NOT NULL DEFAULT gen_random_uuid(),
    inbound_order_item_id UUID          NOT NULL,
    batch_id              UUID,
    location_id           UUID,
    qty_received          DECIMAL(18,4) NOT NULL DEFAULT 0,
    created_at            TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_inbound_order_item_batch PRIMARY KEY (id),
    CONSTRAINT fk_ioib_item     FOREIGN KEY (inbound_order_item_id)
        REFERENCES inbound_order_item (id) ON DELETE CASCADE,
    CONSTRAINT fk_ioib_batch    FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL,
    CONSTRAINT fk_ioib_location FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE SET NULL
);

CREATE INDEX idx_ioib_item ON inbound_order_item_batch (inbound_order_item_id);


-- ===========================================================================
-- OUTBOUND ORDERS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- outbound_order
-- Header record for a pick/pack/ship request.
-- Same PENDING → approval → IN_PROGRESS lifecycle as inbound_order.
-- ---------------------------------------------------------------------------
CREATE TABLE outbound_order (
    id                   UUID         NOT NULL DEFAULT gen_random_uuid(),
    client_id            UUID         NOT NULL,
    warehouse_id         UUID,
    order_number         VARCHAR(50),
    status               order_status NOT NULL DEFAULT 'DRAFT',
    current_stage        VARCHAR(100),
    expected_ship_date   DATE,
    created_by_actor_id  UUID         NOT NULL,
    created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_outbound_order PRIMARY KEY (id),
    CONSTRAINT fk_oo_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_oo_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE SET NULL,
    CONSTRAINT fk_oo_actor     FOREIGN KEY (created_by_actor_id)
        REFERENCES actor (id) ON DELETE RESTRICT
);

CREATE INDEX idx_outbound_order_client_wh ON outbound_order (client_id, warehouse_id);

-- ---------------------------------------------------------------------------
-- outbound_order_item
-- Line item within an outbound order.
-- ---------------------------------------------------------------------------
CREATE TABLE outbound_order_item (
    id                UUID          NOT NULL DEFAULT gen_random_uuid(),
    outbound_order_id UUID          NOT NULL,
    product_id        UUID          NOT NULL,
    qty_ordered       DECIMAL(18,4) NOT NULL,
    qty_shipped       DECIMAL(18,4) NOT NULL DEFAULT 0,
    uom_id            UUID          NOT NULL,
    created_at        TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_outbound_order_item PRIMARY KEY (id),
    CONSTRAINT fk_ooi_order   FOREIGN KEY (outbound_order_id)
        REFERENCES outbound_order (id) ON DELETE CASCADE,
    CONSTRAINT fk_ooi_product FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ooi_uom     FOREIGN KEY (uom_id)
        REFERENCES uom (id) ON DELETE RESTRICT
);

CREATE INDEX idx_outbound_order_item_order ON outbound_order_item (outbound_order_id);

-- ---------------------------------------------------------------------------
-- outbound_order_item_batch
-- Records shipped quantity per batch/location combination for an order item.
-- ---------------------------------------------------------------------------
CREATE TABLE outbound_order_item_batch (
    id                     UUID          NOT NULL DEFAULT gen_random_uuid(),
    outbound_order_item_id UUID          NOT NULL,
    batch_id               UUID,
    location_id            UUID,
    qty_shipped            DECIMAL(18,4) NOT NULL DEFAULT 0,
    created_at             TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at             TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_outbound_order_item_batch PRIMARY KEY (id),
    CONSTRAINT fk_ooib_item     FOREIGN KEY (outbound_order_item_id)
        REFERENCES outbound_order_item (id) ON DELETE CASCADE,
    CONSTRAINT fk_ooib_batch    FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL,
    CONSTRAINT fk_ooib_location FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE SET NULL
);

CREATE INDEX idx_ooib_item ON outbound_order_item_batch (outbound_order_item_id);


-- ===========================================================================
-- STOCK RESERVATIONS & ALLOCATIONS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- stock_reservation
-- Groups outbound allocations for a single outbound order.
-- ---------------------------------------------------------------------------
CREATE TABLE stock_reservation (
    id                UUID               NOT NULL DEFAULT gen_random_uuid(),
    client_id         UUID               NOT NULL,
    warehouse_id      UUID               NOT NULL,
    outbound_order_id UUID               NOT NULL,
    status            reservation_status NOT NULL DEFAULT 'DRAFT',
    created_at        TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ        NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_stock_reservation PRIMARY KEY (id),
    CONSTRAINT fk_sr_client         FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_sr_warehouse      FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_sr_outbound_order FOREIGN KEY (outbound_order_id)
        REFERENCES outbound_order (id) ON DELETE CASCADE
);

CREATE INDEX idx_stock_reservation_order    ON stock_reservation (outbound_order_id);
CREATE INDEX idx_stock_reservation_client   ON stock_reservation (client_id, warehouse_id);

-- ---------------------------------------------------------------------------
-- outbound_allocation
-- Per-line reservation of specific batch stock at a specific location.
-- Tracks the pick → ship lifecycle per allocation line.
-- ---------------------------------------------------------------------------
CREATE TABLE outbound_allocation (
    id                    UUID              NOT NULL DEFAULT gen_random_uuid(),
    stock_reservation_id  UUID              NOT NULL,
    outbound_order_item_id UUID             NOT NULL,
    client_id             UUID              NOT NULL,
    warehouse_id          UUID              NOT NULL,
    product_id            UUID              NOT NULL,
    batch_id              UUID,
    location_id           UUID,
    reserved_qty          DECIMAL(18,4)     NOT NULL DEFAULT 0,
    picked_qty            DECIMAL(18,4)     NOT NULL DEFAULT 0,
    shipped_qty           DECIMAL(18,4)     NOT NULL DEFAULT 0,
    status                allocation_status NOT NULL DEFAULT 'RESERVED',
    created_at            TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ       NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_outbound_allocation PRIMARY KEY (id),
    CONSTRAINT fk_oa_reservation FOREIGN KEY (stock_reservation_id)
        REFERENCES stock_reservation (id) ON DELETE CASCADE,
    CONSTRAINT fk_oa_order_item  FOREIGN KEY (outbound_order_item_id)
        REFERENCES outbound_order_item (id) ON DELETE CASCADE,
    CONSTRAINT fk_oa_client      FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_oa_warehouse   FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_oa_product     FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE RESTRICT,
    CONSTRAINT fk_oa_batch       FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL,
    CONSTRAINT fk_oa_location    FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE SET NULL
);

CREATE INDEX idx_oa_reservation ON outbound_allocation (stock_reservation_id);
CREATE INDEX idx_oa_order_item  ON outbound_allocation (outbound_order_item_id);
CREATE INDEX idx_oa_client_wh   ON outbound_allocation (client_id, warehouse_id, product_id);


-- ===========================================================================
-- TASK WORK ORDERS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- task_work_order
-- Actionable task assigned to a warehouse worker.
-- reference_type / reference_id link to the parent entity (order, adjustment, etc.)
-- ---------------------------------------------------------------------------
CREATE TABLE task_work_order (
    id                UUID          NOT NULL DEFAULT gen_random_uuid(),
    client_id         UUID          NOT NULL,
    warehouse_id      UUID          NOT NULL,
    task_type         task_type     NOT NULL,
    reference_type    VARCHAR(50),                                  -- e.g. 'inbound_order'
    reference_id      UUID,
    reference_item_id UUID,                                         -- optional sub-entity reference
    assigned_user_id  UUID,
    priority          task_priority NOT NULL DEFAULT 'NORMAL',
    status            task_status   NOT NULL DEFAULT 'PENDING',
    created_at        TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_task_work_order PRIMARY KEY (id),
    CONSTRAINT fk_twork_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_twork_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_twork_user      FOREIGN KEY (assigned_user_id)
        REFERENCES "users" (id) ON DELETE SET NULL
);

CREATE INDEX idx_task_client_wh        ON task_work_order (client_id, warehouse_id);
CREATE INDEX idx_task_reference        ON task_work_order (reference_type, reference_id);
CREATE INDEX idx_task_reference_item   ON task_work_order (reference_type, reference_item_id);


-- ===========================================================================
-- ADJUSTMENTS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- adjustment
-- Manual stock quantity correction request. Requires approval before applying.
-- ---------------------------------------------------------------------------
CREATE TABLE adjustment (
    id                   UUID               NOT NULL DEFAULT gen_random_uuid(),
    client_id            UUID               NOT NULL,
    warehouse_id         UUID               NOT NULL,
    product_id           UUID,
    batch_id             UUID,
    location_id          UUID,
    qty_change           DECIMAL(18,4)      NOT NULL,               -- positive = add, negative = remove
    reason               TEXT,
    status               adjustment_status  NOT NULL DEFAULT 'PENDING',
    created_by_actor_id  UUID               NOT NULL,
    created_at           TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ        NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_adjustment PRIMARY KEY (id),
    CONSTRAINT fk_adj_client    FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_adj_warehouse FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_adj_product   FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE SET NULL,
    CONSTRAINT fk_adj_batch     FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL,
    CONSTRAINT fk_adj_location  FOREIGN KEY (location_id)
        REFERENCES location (id) ON DELETE SET NULL,
    CONSTRAINT fk_adj_actor     FOREIGN KEY (created_by_actor_id)
        REFERENCES actor (id) ON DELETE RESTRICT
);

CREATE INDEX idx_adjustment_client_wh ON adjustment (client_id, warehouse_id);


-- ===========================================================================
-- RETURN ORDERS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- return_order
-- Record of goods returned by a customer against an outbound order.
-- ---------------------------------------------------------------------------
CREATE TABLE return_order (
    id                UUID               NOT NULL DEFAULT gen_random_uuid(),
    client_id         UUID               NOT NULL,
    warehouse_id      UUID               NOT NULL,
    outbound_order_id UUID               NOT NULL,
    return_number     VARCHAR(50)        NOT NULL,
    product_id        UUID               NOT NULL,
    batch_id          UUID,
    qty               DECIMAL(18,4)      NOT NULL,
    disposition       return_disposition NOT NULL DEFAULT 'RESTOCK',
    created_at        TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ        NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_return_order PRIMARY KEY (id),
    CONSTRAINT fk_ro_client         FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ro_warehouse      FOREIGN KEY (warehouse_id)
        REFERENCES warehouse (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ro_outbound_order FOREIGN KEY (outbound_order_id)
        REFERENCES outbound_order (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ro_product        FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE RESTRICT,
    CONSTRAINT fk_ro_batch          FOREIGN KEY (batch_id)
        REFERENCES batch (id) ON DELETE SET NULL
);

CREATE INDEX idx_return_order_client_wh ON return_order (client_id, warehouse_id);
CREATE INDEX idx_return_order_outbound  ON return_order (outbound_order_id);


-- ===========================================================================
-- APPROVALS
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- approval
-- Workflow record for any entity that requires admin review before activation.
-- approval_step discriminates inbound/outbound order types:
--   'INBOUND_ORDER'  → routes to inbound_order on approve/reject
--   'OUTBOUND_ORDER' → routes to outbound_order on approve/reject
--   'INITIAL'        → default for adjustments, returns, invoices
-- On APPROVED: referenced order status → IN_PROGRESS
-- On REJECTED: referenced order status → CANCELLED
-- ---------------------------------------------------------------------------
CREATE TABLE approval (
    id                    UUID                    NOT NULL DEFAULT gen_random_uuid(),
    reference_type        approval_reference_type NOT NULL,
    reference_id          UUID                    NOT NULL,         -- ID of the approved entity
    approval_step         VARCHAR(50)             NOT NULL DEFAULT 'INITIAL', -- INBOUND_ORDER | OUTBOUND_ORDER | INITIAL
    sequence_no           INTEGER                 NOT NULL DEFAULT 1,
    requested_by_actor_id UUID                    NOT NULL,
    approved_by_actor_id  UUID,
    status                approval_status         NOT NULL DEFAULT 'PENDING',
    request_notes         TEXT,
    decision_notes        TEXT,
    decision_at           TIMESTAMPTZ,
    created_at            TIMESTAMPTZ             NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ             NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_approval PRIMARY KEY (id),
    CONSTRAINT fk_approval_requested_by FOREIGN KEY (requested_by_actor_id)
        REFERENCES actor (id) ON DELETE RESTRICT,
    CONSTRAINT fk_approval_approved_by  FOREIGN KEY (approved_by_actor_id)
        REFERENCES actor (id) ON DELETE SET NULL
);

CREATE INDEX idx_approval_reference  ON approval (reference_type, reference_id);
CREATE INDEX idx_approval_requested  ON approval (requested_by_actor_id);


-- ===========================================================================
-- BILLING & FINANCE
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- billing_plan
-- Defines pricing structure for a tier of clients.
-- Fee fields store amounts in the lowest currency unit (cents).
-- Recently added: inbound/outbound item and per-kg weight fees.
-- ---------------------------------------------------------------------------
CREATE TABLE billing_plan (
    id                          UUID              NOT NULL DEFAULT gen_random_uuid(),
    plan_name                   VARCHAR(100)      NOT NULL,
    storage_included            DECIMAL(18,4),                      -- included storage volume/units
    billing_cycle               billing_cycle_enum NOT NULL,
    base_fee_cents              BIGINT            DEFAULT 0,        -- flat subscription fee
    inbound_item_fee_cents      BIGINT            DEFAULT 0,        -- fee per inbound item received
    inbound_weight_cents_per_kg BIGINT            DEFAULT 0,        -- fee per kg of inbound items
    outbound_item_fee_cents     BIGINT            DEFAULT 0,        -- fee per outbound item shipped
    outbound_weight_cents_per_kg BIGINT           DEFAULT 0,        -- fee per kg of outbound items
    is_active                   BOOLEAN           NOT NULL DEFAULT TRUE,
    created_at                  TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
    updated_at                  TIMESTAMPTZ       NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_billing_plan PRIMARY KEY (id)
);

-- ---------------------------------------------------------------------------
-- vas  (Value-Added Service)
-- Catalogue of optional services (labelling, kitting, QA inspection, etc.)
-- ---------------------------------------------------------------------------
CREATE TABLE vas (
    id          UUID        NOT NULL DEFAULT gen_random_uuid(),
    code        VARCHAR(50) NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    is_active   BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_vas PRIMARY KEY (id),
    CONSTRAINT uq_vas_code UNIQUE (code)
);

-- ---------------------------------------------------------------------------
-- vas_pricing
-- Links a VAS to a billing plan with its pricing rules.
-- ---------------------------------------------------------------------------
CREATE TABLE vas_pricing (
    id              UUID           NOT NULL DEFAULT gen_random_uuid(),
    vas_id          UUID           NOT NULL,
    billing_plan_id UUID           NOT NULL,
    pricing_method  pricing_method NOT NULL DEFAULT 'FIXED',
    rate_cents      BIGINT         NOT NULL,                        -- base rate in cents
    base_uom_id     UUID,                                          -- UOM for volumetric/weight pricing
    min_charge_cents BIGINT,                                       -- minimum charge floor
    billing_unit    VARCHAR(50),
    rule_json       JSONB          NOT NULL DEFAULT '{}',           -- flexible extra rules
    created_at      TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ    NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_vas_pricing PRIMARY KEY (id),
    CONSTRAINT uq_vas_pricing_vas_plan UNIQUE (vas_id, billing_plan_id),
    CONSTRAINT fk_vp_vas          FOREIGN KEY (vas_id)
        REFERENCES vas (id) ON DELETE CASCADE,
    CONSTRAINT fk_vp_billing_plan FOREIGN KEY (billing_plan_id)
        REFERENCES billing_plan (id) ON DELETE CASCADE,
    CONSTRAINT fk_vp_uom          FOREIGN KEY (base_uom_id)
        REFERENCES uom (id) ON DELETE SET NULL
);

-- ---------------------------------------------------------------------------
-- client_billing_plan
-- Subscription record linking a client to a billing plan for a date range.
-- is_current = TRUE identifies the active plan; only one should be current.
-- ---------------------------------------------------------------------------
CREATE TABLE client_billing_plan (
    id              UUID        NOT NULL DEFAULT gen_random_uuid(),
    client_id       UUID        NOT NULL,
    billing_plan_id UUID        NOT NULL,
    starts_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ends_at         TIMESTAMPTZ,                                    -- NULL = open-ended
    is_current      BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_client_billing_plan PRIMARY KEY (id),
    CONSTRAINT fk_cbp_client       FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE CASCADE,
    CONSTRAINT fk_cbp_billing_plan FOREIGN KEY (billing_plan_id)
        REFERENCES billing_plan (id) ON DELETE RESTRICT
);

CREATE INDEX idx_client_billing_plan_client ON client_billing_plan (client_id);

-- ---------------------------------------------------------------------------
-- invoice
-- Periodic billing document issued to a client.
-- ---------------------------------------------------------------------------
CREATE TABLE invoice (
    id                    UUID           NOT NULL DEFAULT gen_random_uuid(),
    client_id             UUID           NOT NULL,
    invoice_number        VARCHAR(50)    NOT NULL,
    period_start          DATE           NOT NULL,
    period_end            DATE           NOT NULL,
    subtotal_cents        BIGINT         NOT NULL DEFAULT 0,
    tax_amount_cents      BIGINT         NOT NULL DEFAULT 0,
    discount_amount_cents BIGINT         NOT NULL DEFAULT 0,
    total_amount_cents    BIGINT         NOT NULL DEFAULT 0,
    currency              CHAR(3)        NOT NULL DEFAULT 'USD',
    status                invoice_status NOT NULL DEFAULT 'DRAFT',
    due_date              DATE,
    issued_at             TIMESTAMPTZ,
    paid_at               TIMESTAMPTZ,
    notes                 TEXT,
    created_at            TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ    NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_invoice PRIMARY KEY (id),
    CONSTRAINT uq_invoice_number UNIQUE (invoice_number),
    CONSTRAINT fk_invoice_client FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT
);

CREATE INDEX idx_invoice_client ON invoice (client_id);

-- ---------------------------------------------------------------------------
-- invoice_line
-- Individual charge line within an invoice.
-- ---------------------------------------------------------------------------
CREATE TABLE invoice_line (
    id                UUID            NOT NULL DEFAULT gen_random_uuid(),
    invoice_id        UUID            NOT NULL,
    charge_category   charge_category NOT NULL,
    description       TEXT,
    quantity          DECIMAL(18,4)   NOT NULL DEFAULT 0,
    unit_price_cents  BIGINT          NOT NULL,
    total_amount_cents BIGINT         NOT NULL,
    currency          CHAR(3)         NOT NULL DEFAULT 'USD',
    reference_type    VARCHAR(100),
    reference_id      UUID,
    created_at        TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_invoice_line PRIMARY KEY (id),
    CONSTRAINT fk_il_invoice FOREIGN KEY (invoice_id)
        REFERENCES invoice (id) ON DELETE CASCADE
);

CREATE INDEX idx_invoice_line_invoice   ON invoice_line (invoice_id);
CREATE INDEX idx_invoice_line_reference ON invoice_line (reference_type, reference_id);

-- ---------------------------------------------------------------------------
-- billing_transaction
-- Granular charge/credit record. May roll up into invoice lines.
-- Records an individual billing event as it happens (incremental billing).
-- ---------------------------------------------------------------------------
CREATE TABLE billing_transaction (
    id              UUID            NOT NULL DEFAULT gen_random_uuid(),
    client_id       UUID            NOT NULL,
    invoice_id      UUID,                                           -- linked after invoice generation
    charge_category charge_category NOT NULL,
    description     TEXT,
    amount_cents    BIGINT          NOT NULL,                       -- positive = charge, negative = credit
    currency        CHAR(3)         NOT NULL DEFAULT 'USD',
    reference_type  VARCHAR(100),
    reference_id    UUID,
    created_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_billing_transaction PRIMARY KEY (id),
    CONSTRAINT fk_bt_client  FOREIGN KEY (client_id)
        REFERENCES client (id) ON DELETE RESTRICT,
    CONSTRAINT fk_bt_invoice FOREIGN KEY (invoice_id)
        REFERENCES invoice (id) ON DELETE SET NULL
);

CREATE INDEX idx_billing_transaction_client    ON billing_transaction (client_id);
CREATE INDEX idx_billing_transaction_invoice   ON billing_transaction (invoice_id);
CREATE INDEX idx_billing_transaction_reference ON billing_transaction (reference_type, reference_id);


-- ===========================================================================
-- SYSTEM AUDIT
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- audit_log
-- Append-only, immutable record of every significant system action.
-- Never updated or deleted.
-- ---------------------------------------------------------------------------
CREATE TABLE audit_log (
    id            UUID        NOT NULL DEFAULT gen_random_uuid(),
    actor_id      UUID,                                             -- NULL = system/unauthenticated
    action        VARCHAR(100) NOT NULL,                           -- e.g. 'CREATE_ORDER', 'APPROVE'
    resource_type VARCHAR(100) NOT NULL,
    resource_id   UUID,
    ip_address    INET,
    details_json  JSONB       NOT NULL DEFAULT '{}',
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT pk_audit_log PRIMARY KEY (id),
    CONSTRAINT fk_audit_log_actor FOREIGN KEY (actor_id)
        REFERENCES actor (id) ON DELETE SET NULL
);

CREATE INDEX idx_audit_log_actor    ON audit_log (actor_id);
CREATE INDEX idx_audit_log_resource ON audit_log (resource_type, resource_id);
CREATE INDEX idx_audit_log_created  ON audit_log (created_at);


-- ===========================================================================
-- END OF SCHEMA
-- ===========================================================================
-- Table count : 32
-- Enum count  : 20
-- Dialect     : PostgreSQL 14+
-- =============================================================================
