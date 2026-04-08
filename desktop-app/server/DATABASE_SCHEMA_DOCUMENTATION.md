# PostgreSQL database schema documentation

This document is derived from the **Prisma schema** at `server/prisma/schema.prisma`, which targets **PostgreSQL**. The repository also references `context/schema.sql` as a canonical SQL definition; triggers, checks, and partial indexes may exist in SQL migrations that are not fully repeated in Prisma comments—verify **`prisma/migrations`** for the live database.

**Conventions**

- Primary keys: UUID (`gen_random_uuid()`).
- Money: many amounts use **`BigInt` cents** (`*_cents`) on billing tables; inventory uses **`Decimal(18, 4)`** quantities.
- Timestamps: `timestamptz` mapped as Prisma `DateTime`; some business dates use `@db.Date`.

---

## 1. Tables and columns

Tables are listed by domain. Column types below use Prisma/PostgreSQL semantics; `@map` shows the physical column name where it differs.

### 1.1 Identity & access (IAM)

| Table (physical name) | Purpose | Main columns |
|----------------------|---------|--------------|
| **`client`** | Tenant (3PL customer) | `id`, `code` (unique), `name`, contact/address fields, `balance_cents`, `currency`, `status` (`ClientStatus`), `is_active`, timestamps |
| **`client_account`** | Portal login identity | `id`, `client_id` → client, `client_role_id` → `client_roles`, `email` (unique), `password_hash`, `first_name`, `last_name`, `is_active`, timestamps |
| **`client_roles`** | Role + permissions JSON | `id`, `role_name` (unique), `permissions_json`, `is_active`, timestamps |
| **`users`** | Internal staff | `id`, `email` (unique), `password_hash`, names, `internal_role_id` → `user_roles`, `warehouse_id` → `warehouse`, `is_active`, timestamps |
| **`user_roles`** | Staff role definitions | `id`, `role_name` (unique), `permissions_json`, `is_active`, timestamps |
| **`actor`** | Unified actor for auditing / workflow | `id`, `actor_type` (`INTERNAL_USER` \| `CLIENT_ACCOUNT` \| `SYSTEM`), optional `user_id` (unique) → `users`, optional `client_account_id` (unique) → `client_account`, timestamps |

**Enums:** `client_status`, `actor_type` (mapped in Prisma as `ClientStatus`, `ActorType`).

---

### 1.2 Master data

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`uom`** | Units of measure | `id`, `code` (unique), `name`, `dimension` (`UomDimension`), `base_conversion`, `is_active`, timestamps |
| **`warehouse`** | Physical warehouse | `id`, `code` (unique), `name`, `capacity_value`, `capacity_uom_id` → `uom`, `is_active`, timestamps |
| **`location`** | Bin/zone hierarchy | `id`, `warehouse_id` → `warehouse`, `parent_location_id` (self-FK), `code`, `location_type`, capacity fields, `is_active`; **unique** `(warehouse_id, code)` |
| **`product`** | Client SKU | `id`, `client_id` → `client`, `sku`, `name`, description, category, brand, pricing, `default_uom_id` → `uom`, dimensions/weight, flags (`is_serialized`, `is_batch_tracked`, …), thresholds, `is_active`; **unique** `(client_id, sku)` |
| **`batch`** | Lot/batch per product | `id`, `product_id` → `product`, `batch_code`, dates, `lot_number`, `supplier_batch_code`, `batch_status`; **unique** `(product_id, batch_code)` |

**Enums:** `uom_dimension`, `location_type`, `batch_status`.

---

### 1.3 Inventory

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`inventory_ledger`** | **Append-only** movement log (source of truth) | `id`, `client_id`, `warehouse_id`, `product_id`, optional `batch_id`, optional `location_id`, `movement_type`, `qty_change`, `qty_before`, `qty_after`, optional `reference_type` / `reference_id`, `created_at` |
| **`current_stock`** | **Derived** snapshot (by app rules, often maintained by DB triggers) | `id`, `client_id`, `warehouse_id`, `product_id`, optional `batch_id`, optional `location_id`, `quantity`, `created_at`, `updated_at`; **unique** `idx_current_stock_unique` on `(client_id, warehouse_id, product_id, batch_id, location_id)` |

**Enum:** `movement_type`.

---

### 1.4 Inbound orders

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`inbound_order`** | ASN / inbound | `id`, `client_id`, optional `warehouse_id`, optional `order_number`, `status` (`OrderStatus`), `current_stage`, `expected_date`, `created_by_actor_id` → `actor`, timestamps |
| **`inbound_order_item`** | Lines | `id`, `inbound_order_id`, `product_id`, `qty_ordered`, `qty_received`, `uom_id`, timestamps |
| **`inbound_order_item_batch`** | Receive to batch/location | `id`, `inbound_order_item_id`, optional `batch_id`, optional `location_id`, `qty_received`, timestamps |

**Enum:** `order_status` (shared with outbound).

---

### 1.5 Outbound orders & fulfillment

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`outbound_order`** | Sales / outbound | `id`, `client_id`, optional `warehouse_id`, optional `order_number`, `status`, `current_stage`, `expected_ship_date`, `created_by_actor_id` → `actor`, timestamps |
| **`outbound_order_item`** | Lines | `id`, `outbound_order_id`, `product_id`, `qty_ordered`, `qty_shipped`, `uom_id`, timestamps |
| **`outbound_order_item_batch`** | Ship from batch/location | `id`, `outbound_order_item_id`, optional `batch_id`, optional `location_id`, `qty_shipped`, timestamps |
| **`stock_reservation`** | Reservation header per outbound | `id`, `client_id`, `warehouse_id`, `outbound_order_id`, `status` (`ReservationStatus`), timestamps |
| **`outbound_allocation`** | Line-level reserve/pick/ship | `id`, `stock_reservation_id`, `outbound_order_item_id`, `client_id`, `warehouse_id`, `product_id`, optional `batch_id`, optional `location_id`, `reserved_qty`, `picked_qty`, `shipped_qty`, `status` (`AllocationStatus`), timestamps |

**Enums:** `reservation_status`, `allocation_status`.

---

### 1.6 Operations

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`task_work_order`** | Warehouse tasks | `id`, `client_id`, `warehouse_id`, `task_type` (`TaskType`), optional `reference_type` / `reference_id` / `reference_item_id`, optional `assigned_user_id` → `users`, `priority`, `status` (`TaskStatus`), timestamps |
| **`adjustment`** | Stock adjustment request | `id`, `client_id`, `warehouse_id`, optional `product_id`, optional `batch_id`, optional `location_id`, `qty_change`, `reason`, `status` (`AdjustmentStatus`), `created_by_actor_id` → `actor`, timestamps |
| **`return_order`** | Return line | `id`, `client_id`, `warehouse_id`, `outbound_order_id`, `return_number`, `product_id`, optional `batch_id`, `qty`, `disposition` (`ReturnDisposition`), timestamps |

**Enums:** `task_type`, `task_status`, `task_priority`, `adjustment_status`, `return_disposition`.

---

### 1.7 Approvals & audit

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`approval`** | Generic approval row | `id`, `reference_type` (`ApprovalReferenceType`), `reference_id` (UUID), `approval_step`, `sequence_no`, `requested_by_actor_id` → `actor`, optional `approved_by_actor_id` → `actor`, `status` (`ApprovalStatus`), notes, `decision_at`, timestamps |
| **`audit_log`** | Append-only audit | `id`, optional `actor_id` → `actor`, `action`, `resource_type`, optional `resource_id`, optional `ip_address`, `details_json`, `created_at` |

**Enums:** `approval_status`, `approval_reference_type`.

---

### 1.8 Billing & VAS

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`billing_plan`** | Plan template | `plan_name`, `storage_included`, `billing_cycle`, fee fields in cents, `is_active`, timestamps |
| **`client_billing_plan`** | Client subscription to plan | `client_id`, `billing_plan_id`, `starts_at`, optional `ends_at`, `is_current`, timestamps |
| **`vas`** | Value-added service catalog | `code` (unique), `name`, `description`, `is_active`, timestamps |
| **`vas_pricing`** | Price per VAS per plan | `vas_id`, `billing_plan_id`, `pricing_method`, `rate_cents`, optional `base_uom_id`, optional `min_charge_cents`, `billing_unit`, `rule_json`; **unique** `(vas_id, billing_plan_id)` |
| **`invoice`** | Invoice header | `client_id`, `invoice_number` (unique), `period_start`/`end`, `subtotal_cents`, tax/discount/total cents, `currency`, `status` (`InvoiceStatus`), `due_date`, `issued_at`, `paid_at`, `notes`, timestamps |
| **`invoice_line`** | Invoice lines | `invoice_id`, `charge_category` (`ChargeCategory`), `description`, `quantity`, `unit_price_cents`, `total_amount_cents`, `currency`, optional polymorphic `reference_type` / `reference_id`, timestamps |
| **`billing_transaction`** | Financial movements | `client_id`, optional `invoice_id`, `charge_category`, `description`, `amount_cents`, `currency`, optional `reference_type` / `reference_id`, `created_at` |

**Enums:** `billing_cycle_enum`, `pricing_method`, `invoice_status`, `charge_category`.

---

### 1.9 Client notifications

| Table | Purpose | Main columns |
|-------|---------|--------------|
| **`client_notification`** | In-app notifications | `client_id` → `client`, `title`, `message`, `importance`, optional `reference_type` / `reference_id`, `is_read`, `created_at` |

---

## 2. Relationships (foreign keys)

Summary of **explicit** Prisma relations (physical FKs in PostgreSQL as generated by migrations).

### 2.1 Core tenant graph

```
client
  ├──< client_account >── client_roles
  ├──< product
  ├──< inventory_ledger, current_stock
  ├──< inbound_order, outbound_order, return_order
  ├──< stock_reservation, outbound_allocation (via FK columns)
  ├──< task_work_order, adjustment
  ├──< client_billing_plan >── billing_plan
  ├──< invoice, billing_transaction
  └──< client_notification
```

### 2.2 Actor graph

```
actor ──optional── users (internal)
actor ──optional── client_account (portal)
actor ──< inbound_order.created_by_actor_id
actor ──< outbound_order.created_by_actor_id
actor ──< adjustment.created_by_actor_id
actor ──< approval.requested_by_actor_id / approved_by_actor_id
actor ──< audit_log.actor_id
```

### 2.3 Warehouse / location / product

```
warehouse ──< location (parent_location_id → location self-hierarchy)
warehouse ──< users (default warehouse)
uom ──< warehouse.capacity_uom, location.capacity_uom, product.default_uom, order line UOMs, vas_pricing.base_uom
client ──< product
product ──< batch
```

### 2.4 Inventory

```
inventory_ledger: client, warehouse, product, optional batch, optional location
current_stock:    client, warehouse, product, optional batch, optional location
```

### 2.5 Orders → reservations → allocations

```
inbound_order ──< inbound_order_item ──< inbound_order_item_batch [batch, location]
outbound_order ──< outbound_order_item ──< outbound_order_item_batch [batch, location]
outbound_order ──< stock_reservation ──< outbound_allocation
outbound_order_item ──< outbound_allocation
```

**Note:** `outbound_allocation` repeats `client_id`, `warehouse_id`, `product_id` from parent entities—**denormalized** for query convenience; must stay consistent with `outbound_order_item` / reservation in application logic.

### 2.6 Returns

```
return_order: client, warehouse, outbound_order, product, optional batch
```

### 2.7 Billing

```
invoice ──< invoice_line
client ──< invoice, billing_transaction
invoice ──< billing_transaction (optional)
billing_plan ──< client_billing_plan, vas_pricing
vas ──< vas_pricing
```

### 2.8 Polymorphic / loose references (no FK to target table)

| Table | Columns | Meaning |
|-------|---------|---------|
| **`inventory_ledger`** | `reference_type`, `reference_id` | Points to various business objects by convention only |
| **`approval`** | `reference_type`, `reference_id` | Enum `ApprovalReferenceType` + UUID; not enforced per entity table |
| **`task_work_order`** | `reference_type`, `reference_id`, `reference_item_id` | Same pattern |
| **`invoice_line`** | `reference_type`, `reference_id` | Optional traceability |
| **`billing_transaction`** | `reference_type`, `reference_id` | Optional link |

---

## 3. Data flow between tables

### 3.1 Stock truth vs snapshot

1. **Authoritative movements** are recorded in **`inventory_ledger`** (`movement_type`, `qty_change`, before/after quantities).
2. **`current_stock`** is a **materialized view of state** at `(client, warehouse, product, batch?, location?)` granularity. The Prisma comment in the codebase and `context/schema.sql` describe **DB triggers** that update `current_stock` from ledger inserts and may **block** direct writes to `current_stock` except from trusted functions—confirm in deployed migrations.

### 3.2 Inbound flow

`client` → **`inbound_order`** (actor creates) → **`inbound_order_item`** → receiving populates **`inbound_order_item_batch`** and drives **ledger** movements (receipt/putaway) → **`current_stock`** updates.

### 3.3 Outbound flow

`client` → **`outbound_order`** → lines → **`stock_reservation`** → **`outbound_allocation`** (reserve → pick → ship quantities). Shipping should create **ledger** rows (e.g. `SHIPMENT`) and reduce **`current_stock`** through the same trigger pipeline.

### 3.4 Adjustments & returns

- **`adjustment`**: approved/applied flows should insert **ledger** rows (`ADJUSTMENT` or related) and align snapshot rows.
- **`return_order`**: ties to **`outbound_order`**; processing should add ledger movements (e.g. `RETURN`) and restock or quarantine per `disposition`.

### 3.5 Approvals

**`approval`** rows reference other entities by **`reference_type` + `reference_id`** only—resolution to `adjustment`, `return_order`, etc. is **application-level**, not a declarative FK.

### 3.6 Billing

**`billing_plan`** + **`client_billing_plan`** define what to charge; generation creates **`invoice`** + **`invoice_line`**; payments/posting create **`billing_transaction`**; **`client.balance_cents`** (if used) would be updated in application logic—verify services for consistency with transactions.

### 3.7 Audit

**`audit_log`** records `actor_id` + resource identifiers for compliance; designed as **append-only** in SQL comments.

---

## 4. Potential design issues

| Issue | Detail |
|-------|--------|
| **Polymorphic references** | `approval`, `task_work_order`, `inventory_ledger`, and billing line/transaction references use `reference_type` + UUID without FK—**no DB-level referential integrity**; orphans and wrong-type pointers are possible if the app bugs. |
| **Denormalized allocation** | `outbound_allocation` duplicates `client_id`, `warehouse_id`, `product_id` from parent rows—risk of **drift** if updates bypass checks. |
| **Return order shape** | One **`return_order`** row per product/batch-style line; heavy returns may create many rows—acceptable but not a single “header + lines” return document model. |
| **`order_number` nullable** | Inbound/outbound allow null `order_number`; business often requires unique human-readable numbers per tenant—may need a **partial unique index** `(client_id, order_number)` where not null. |
| **`Client.balance_cents`** | Parallel accounting may conflict with **`billing_transaction`** / **`invoice`** totals if not updated transactionally. |
| **Notification `importance`** | Stored as `String` rather than enum in Prisma—**weaker validation** at DB level than application DTOs. |
| **Ledger `reference_id` type** | UUID in schema; some domain references might be non-UUID strings—**mismatch risk** if mixed. |
| **Unique `current_stock` with NULLs** | Unique constraint includes nullable `batch_id` and `location_id`. In PostgreSQL, **multiple rows** can sometimes exist that differ only by “all-NULL” optional keys depending on uniqueness rules—**confirm** migration definition and consider **partial unique indexes** or generated keys for “no batch / no location” rows. |

---

## 5. Missing relations or normalization problems

| Topic | Assessment |
|-------|------------|
| **Task ↔ order FK** | No FK from `task_work_order.reference_id` to `inbound_order` / `outbound_order` / etc.—**by design** for flexibility; normalization is weak; consider **discriminated subtables** or strict validation in code. |
| **Approval ↔ domain row** | Same as above; **`approval.reference_id`** is not tied to `adjustment.id`, etc., at DB level. |
| **Invoice line ↔ stock movement** | No link from **`invoice_line`** to ledger or orders except loose `reference_*`—fine for billing, but **traceability** depends on discipline. |
| **Client ↔ warehouse** | No **`client_warehouse`** junction; **all warehouses are global** in the schema—client access is not modeled in DB; multi-tenant warehouse assignment is **application policy** only. |
| **User ↔ task** | `task_work_order.assigned_user_id` → `users` exists; **no link** from task to specific `inbound_order` / `outbound_order` row except polymorphic refs. |
| **Role permissions** | **`permissions_json`** on both `client_roles` and `user_roles`—flexible but **not normalized**; hard to query “all users with permission X” without JSON operators. |
| **VAS pricing uniqueness** | **`vas_pricing`** unique on `(vas_id, billing_plan_id)` is normalized; optional `rule_json` holds **non-relational** rules. |

---

## Appendix A: Enum summary (Prisma → PostgreSQL)

| Prisma enum | Typical use |
|-------------|-------------|
| `ClientStatus` | Tenant lifecycle |
| `ActorType` | `actor.actor_type` |
| `UomDimension`, `LocationType`, `BatchStatus` | Master data |
| `MovementType` | Ledger lines |
| `OrderStatus` | Inbound + outbound orders |
| `TaskType`, `TaskStatus`, `TaskPriority` | Tasks |
| `AdjustmentStatus` | Adjustments |
| `ReturnDisposition` | Returns |
| `ReservationStatus`, `AllocationStatus` | Reservations / allocations |
| `ApprovalStatus`, `ApprovalReferenceType` | Approvals |
| `BillingCycleEnum`, `PricingMethod`, `InvoiceStatus`, `ChargeCategory` | Billing |

---

## Appendix B: Source files

- **Prisma models:** `server/prisma/schema.prisma`
- **SQL reference:** `context/schema.sql` (triggers, checks, partial indexes may be documented here)
- **Migrations:** `server/prisma/migrations/` (authoritative for deployed FKs and indexes)

*Regenerate or diff this document if the schema changes.*
