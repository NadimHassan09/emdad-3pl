# Emdad 3PL — Complete QA Testing Documentation

> **System:** Emdad 3PL — Third-Party Logistics Management Platform  
> **Generated:** 2026-03-18  
> **Base API URL:** `https://emdad-3pl.onrender.com`  
> **Frontend (Client Portal):** `ClientFinal/client-portal`  
> **Frontend (Admin):** `ClientFinal/admin`

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Authentication & Roles](#2-authentication--roles)
3. [API Documentation](#3-api-documentation)
   - [Auth](#31-auth)
   - [Clients](#32-clients)
   - [Products](#33-products)
   - [UOM (Units of Measure)](#34-uom-units-of-measure)
   - [Warehouses](#35-warehouses)
   - [Locations](#36-locations)
   - [Inbound Orders](#37-inbound-orders)
   - [Outbound Orders](#38-outbound-orders)
   - [Return Orders](#39-return-orders)
   - [Inventory](#310-inventory)
   - [Approvals](#311-approvals)
   - [Billing Plans](#312-billing-plans)
   - [Billing Transactions](#313-billing-transactions)
   - [Notifications](#314-notifications-client-portal)
4. [Database Documentation](#4-database-documentation)
5. [Frontend Documentation](#5-frontend-documentation)
   - [Admin Portal](#51-admin-portal)
   - [Client Portal](#52-client-portal)
6. [Business Logic Flows](#6-business-logic-flows)
7. [Roles & Permissions](#7-roles--permissions)
8. [QA Test Cases](#8-qa-test-cases)

---

## 1. System Overview

Emdad 3PL is a logistics management system that allows:

- **Client companies** to manage their inventory, create inbound/outbound orders, view invoices and billing, and track movements via a dedicated **Client Portal**.
- **Admin/warehouse staff** to operate the warehouse, approve client orders, manage master data (clients, products, warehouses, locations, UOM), process orders, track tasks, and manage billing via an **Admin Portal**.

**Tech Stack:**
- Backend: NestJS + Prisma ORM
- Database: PostgreSQL
- Frontend: React + TypeScript + Tailwind CSS + Shadcn UI
- Authentication: JWT (access + refresh tokens)

---

## 2. Authentication & Roles

### Actor Types

| Actor Type | Login Endpoint | Description |
|---|---|---|
| `CLIENT_ACCOUNT` | `POST /auth/client/login` | Company client accounts (users of the client portal) |
| `STAFF` | `POST /auth/staff/login` | Internal warehouse staff / admin users |

### Token Flow

1. Login → Receive `accessToken` + `refreshToken`
2. All protected endpoints require: `Authorization: Bearer <accessToken>`
3. Use `POST /auth/refresh` to get a new access token when it expires

### Guards Used in Code

- `JwtAuthGuard` — Validates the access token; required for most endpoints
- `ClientAccountGuard` — Additionally verifies the actor is a CLIENT_ACCOUNT type (used for client-portal scoped endpoints)

---

## 3. API Documentation

> **Authentication header for all protected endpoints:**  
> `Authorization: Bearer <accessToken>`

---

### 3.1 Auth

#### `POST /auth/client/login`

Authenticates a client portal user.

- **Auth required:** No
- **Roles allowed:** Public

**Request body:**
```json
{
  "email": "client@company.com",
  "password": "securePassword123"
}
```

**Success response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900
}
```

**Possible errors:**
| Status | Reason |
|---|---|
| 401 | Invalid email or password |
| 401 | Account is inactive |

---

#### `POST /auth/staff/login`

Authenticates an admin/staff user.

- **Auth required:** No
- **Roles allowed:** Public

**Request body:**
```json
{
  "email": "admin@emdad.com",
  "password": "adminPassword123"
}
```

**Success response (200):** Same as client login above.

**Possible errors:**
| Status | Reason |
|---|---|
| 401 | Invalid email or password |
| 401 | Staff account not found |

---

#### `POST /auth/refresh`

Refreshes the access token using a refresh token.

- **Auth required:** No

**Request body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Success response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900
}
```

**Possible errors:**
| Status | Reason |
|---|---|
| 401 | Refresh token invalid or expired |

---

#### `GET /auth/me`

Returns the currently authenticated user's profile.

- **Auth required:** Yes (any authenticated actor)

**Success response (200):**
```json
{
  "actorId": "uuid",
  "actorType": "CLIENT_ACCOUNT",
  "sub": "uuid",
  "clientId": "uuid",
  "role": "ADMIN",
  "permissions": ["read:orders", "write:orders"]
}
```

---

### 3.2 Clients

> **Note:** These endpoints have no `JwtAuthGuard` in the controller shown. They are assumed to be admin-only by convention. Assumption: Protected via global middleware or API gateway.

#### `POST /clients`

Creates a new client company.

- **Auth required:** Yes (Admin)

**Request body:**
```json
{
  "name": "شركة الأمل للتجارة",
  "code": "AMAL001",
  "contactEmail": "info@amal.com",
  "contactPhone": "+966501234567",
  "isActive": true
}
```

**Success response (201):**
```json
{
  "id": "uuid",
  "code": "AMAL001",
  "name": "شركة الأمل للتجارة",
  "status": "ACTIVE",
  "isActive": true,
  "createdAt": "2026-01-01T00:00:00.000Z"
}
```

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | Missing required fields |
| 409 | Client code already exists |

---

#### `GET /clients`

Returns a list of all client companies.

- **Auth required:** Yes (Admin)
- **Query params:**

| Param | Type | Description |
|---|---|---|
| `name` | string | Filter by client name (partial match) |
| `isActive` | boolean | Filter by active status |

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "code": "AMAL001",
    "name": "شركة الأمل للتجارة",
    "status": "ACTIVE",
    "isActive": true
  }
]
```

---

#### `GET /clients/:id`

Returns a single client company by ID.

- **Auth required:** Yes (Admin)

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | Invalid UUID format |
| 404 | Client not found |

---

#### `GET /clients/:id/accounts`

Returns all client accounts (users) belonging to a client company.

- **Auth required:** Yes (Admin)

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "email": "user@company.com",
    "firstName": "أحمد",
    "lastName": "محمد",
    "isActive": true,
    "clientRole": {
      "id": "uuid",
      "roleName": "MANAGER"
    }
  }
]
```

---

#### `PATCH /clients/:id`

Updates a client company.

- **Auth required:** Yes (Admin)

**Request body (partial):**
```json
{
  "name": "الاسم الجديد",
  "isActive": false
}
```

---

### 3.3 Products

#### `GET /products/client-portal/list` or `GET /products/my`

Returns products belonging to the authenticated client only.

- **Auth required:** Yes (CLIENT_ACCOUNT)
- **Guards:** `JwtAuthGuard + ClientAccountGuard`

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "sku": "SKU-001",
    "name": "منتج أ",
    "isActive": true,
    "minThreshold": 10,
    "defaultUom": {
      "id": "uuid",
      "code": "PCS",
      "name": "قطعة"
    },
    "client": {
      "id": "uuid",
      "name": "شركة الأمل"
    }
  }
]
```

---

#### `POST /products/client-portal`

Creates a product linked to the authenticated client.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Request body:**
```json
{
  "sku": "SKU-NEW-001",
  "name": "منتج جديد",
  "defaultUomId": "uuid-of-uom",
  "minThreshold": 5
}
```

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | Missing `sku`, `name`, or `defaultUomId` |
| 404 | UOM not found |

---

#### `PATCH /products/client-portal/:id`

Updates a client-owned product.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Possible errors:**
| Status | Reason |
|---|---|
| 403 | Product belongs to a different client |
| 404 | Product not found |

---

#### `DELETE /products/:id`

Deletes a product (client portal, ownership verified).

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Possible errors:**
| Status | Reason |
|---|---|
| 403 | Product belongs to a different client |
| 404 | Product not found |

---

#### `POST /products` (Admin)

Creates a product as an admin (clientId must be specified in the body).

- **Auth required:** Yes (Admin)

**Request body:**
```json
{
  "clientId": "uuid",
  "sku": "SKU-ADMIN-001",
  "name": "منتج إداري",
  "defaultUomId": "uuid",
  "minThreshold": 0,
  "isActive": true
}
```

---

#### `GET /products` (Admin)

Lists all products with optional filters.

- **Auth required:** Yes (Admin)
- **Query params:** `clientId`, `isActive`

---

#### `GET /products/:id` (Admin)

Returns a single product.

---

#### `PATCH /products/:id` (Admin)

Updates any product (admin-level, no ownership check).

---

### 3.4 UOM (Units of Measure)

#### `POST /uom`

Creates a unit of measure.

- **Auth required:** Yes (Admin — assumed)

**Request body:**
```json
{
  "code": "KG",
  "name": "كيلوجرام",
  "dimension": "WEIGHT"
}
```

Valid `dimension` values: `WEIGHT`, `VOLUME`, `LENGTH`, `QUANTITY`, `AREA`, `OTHER`

---

#### `GET /uom`

Lists all UOMs.

- **Query params:** `code`, `dimension`

---

#### `GET /uom/:id`

Returns a single UOM.

---

#### `PATCH /uom/:id`

Updates a UOM.

---

#### `DELETE /uom/:id`

Deletes a UOM.

**Possible errors:**
| Status | Reason |
|---|---|
| 409 | UOM is still referenced by one or more products |
| 404 | UOM not found |

---

### 3.5 Warehouses

#### `GET /warehouses/client-portal/list`

Returns active warehouses for the client portal.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "code": "WH-RUH",
    "name": "المستودع الرئيسي - الرياض",
    "city": "الرياض",
    "isActive": true
  }
]
```

---

#### `POST /warehouses` (Admin)

Creates a warehouse.

**Request body:**
```json
{
  "code": "WH-JED",
  "name": "مستودع جدة",
  "address": "جدة، حي الصناعية",
  "city": "جدة",
  "isActive": true
}
```

---

#### `GET /warehouses` (Admin)

Lists all warehouses.

- **Query params:** `isActive`, `city`

---

#### `GET /warehouses/:id` (Admin)

Returns a single warehouse.

---

#### `PATCH /warehouses/:id` (Admin)

Updates a warehouse.

---

### 3.6 Locations

#### `GET /locations/tree`

Returns all locations in a nested tree structure.

- **Auth required:** Not required (no guard applied)

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "code": "WH-RUH-A",
    "name": "منطقة A",
    "type": "ZONE",
    "warehouseId": "uuid",
    "parentId": null,
    "children": [
      {
        "id": "uuid",
        "code": "WH-RUH-A-01",
        "name": "رف 01",
        "type": "SHELF",
        "children": []
      }
    ]
  }
]
```

---

#### `GET /locations/flat`

Returns a flat list of all locations. Optionally filter by warehouse.

- **Query params:** `warehouseId` (optional UUID)

---

#### `POST /warehouses/:warehouseId/locations`

Creates a location within a warehouse.

- **Auth required:** Yes (Admin — assumed)

**Request body:**
```json
{
  "name": "رف B-02",
  "type": "SHELF",
  "parentId": "uuid-of-parent-zone"
}
```

> **Note:** `code` is auto-generated by the backend (or generated on the client side and sent). The barcode is the same as the code.

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | Missing `name` or `type` |
| 404 | Warehouse or parent location not found |

---

#### `GET /warehouses/:warehouseId/locations`

Lists all locations inside a specific warehouse.

---

#### `PATCH /warehouses/:warehouseId/locations/:id`

Updates a location.

---

#### `DELETE /warehouses/:warehouseId/locations/:id`

Deletes a location.

**Possible errors:**
| Status | Reason |
|---|---|
| 409 | Location has child locations |
| 409 | Location has stock/inventory |
| 404 | Location not found |

---

### 3.7 Inbound Orders

#### `GET /inbound-orders/client-portal`

Returns inbound orders for the authenticated client only.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Query params:**
| Param | Type | Description |
|---|---|---|
| `status` | string | Filter by status (PENDING, IN_PROGRESS, COMPLETED, etc.) |
| `from` | date | Filter orders from this date |
| `to` | date | Filter orders up to this date |

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "orderNumber": "INB-00041",
    "status": "PENDING",
    "expectedDate": "2026-02-10",
    "createdAt": "2026-01-30T10:00:00.000Z",
    "items": []
  }
]
```

---

#### `GET /inbound-orders/client-portal/detail`

Returns a single inbound order by reference/order number.

- **Auth required:** Yes (CLIENT_ACCOUNT)
- **Query params:** `ref` (required) — the order number string

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | `ref` parameter missing |
| 404 | Order not found or belongs to different client |

---

#### `POST /inbound-orders/client-portal`

Creates an inbound order from the client portal. Order starts with status `PENDING` and is sent to the admin approval queue.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Request body:**
```json
{
  "expectedDate": "2026-02-15"
}
```

**Success response (201):**
```json
{
  "id": "uuid",
  "orderNumber": "INB-00042",
  "status": "PENDING",
  "clientId": "uuid",
  "expectedDate": "2026-02-15T00:00:00.000Z",
  "createdAt": "2026-01-30T10:00:00.000Z"
}
```

> **Business Rule:** Client-created orders are automatically submitted to the approvals system with `approvalStep: "INBOUND_ORDER"`.

---

#### `POST /inbound-orders/client-portal/:orderId/items`

Adds an item to a client-created inbound order.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Request body:**
```json
{
  "productId": "uuid",
  "qtyOrdered": 100,
  "uomId": "uuid"
}
```

**Possible errors:**
| Status | Reason |
|---|---|
| 400 | Missing productId, qtyOrdered, or uomId |
| 403 | Order belongs to a different client |
| 404 | Order or product not found |

---

#### `POST /inbound-orders` (Admin)

Creates an inbound order as admin. Order starts with status `IN_PROGRESS` immediately (no approval needed).

- **Auth required:** Yes (any authenticated actor via JwtAuthGuard)

**Request body:**
```json
{
  "clientId": "uuid",
  "warehouseId": "uuid",
  "expectedDate": "2026-02-15",
  "notes": "urgent shipment"
}
```

---

#### `GET /inbound-orders` (Admin)

Lists all inbound orders with optional filters.

> **Note:** PENDING orders (awaiting approval) are filtered out of the main admin orders list in the frontend; they appear only in the Approvals section.

---

#### `GET /inbound-orders/:id` (Admin)

Returns a single inbound order with full details.

---

#### `PATCH /inbound-orders/:id` (Admin)

Updates an inbound order (e.g., change expected date, notes).

---

#### `POST /inbound-orders/:id/items` (Admin)

Adds an item to an admin-created inbound order.

**Request body:**
```json
{
  "productId": "uuid",
  "qtyOrdered": 50,
  "uomId": "uuid",
  "batchNumber": "BATCH-001",
  "locationId": "uuid"
}
```

---

#### `POST /inbound-orders/:id/receive` (Admin)

Records the physical receipt of items for an inbound order (updates inventory).

**Request body:**
```json
{
  "items": [
    {
      "orderItemId": "uuid",
      "qtyReceived": 50,
      "locationId": "uuid"
    }
  ]
}
```

---

### 3.8 Outbound Orders

#### `GET /outbound-orders/client-portal`

Returns outbound orders for the authenticated client only.

- **Auth required:** Yes (CLIENT_ACCOUNT)

---

#### `GET /outbound-orders/client-portal/detail`

Returns a single outbound order by reference number.

- **Auth required:** Yes (CLIENT_ACCOUNT)
- **Query params:** `ref` (required)

---

#### `POST /outbound-orders/client-portal`

Creates an outbound order from the client portal. Status starts as `PENDING`, submitted for approval.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Request body:**
```json
{
  "expectedDate": "2026-02-20",
  "deliveryAddress": "شارع الملك فهد، الرياض"
}
```

> **Business Rule:** Client-created outbound orders are automatically submitted to the approvals system with `approvalStep: "OUTBOUND_ORDER"`.

---

#### `POST /outbound-orders/client-portal/:orderId/items`

Adds an item to a client-created outbound order.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Request body:**
```json
{
  "productId": "uuid",
  "qtyOrdered": 20,
  "uomId": "uuid"
}
```

---

#### `POST /outbound-orders` (Admin)

Creates an outbound order as admin. Status is immediately `IN_PROGRESS`.

- **Auth required:** Yes (Admin)

**Request body:**
```json
{
  "clientId": "uuid",
  "warehouseId": "uuid",
  "expectedDate": "2026-02-20",
  "deliveryAddress": "شارع الملك فهد، الرياض"
}
```

---

#### `GET /outbound-orders` (Admin)

Lists all outbound orders (PENDING orders excluded in the frontend display).

---

#### `GET /outbound-orders/:id` (Admin)

Returns a single outbound order.

---

#### `PATCH /outbound-orders/:id` (Admin)

Updates an outbound order.

---

#### `POST /outbound-orders/:id/items` (Admin)

Adds an item to an outbound order.

---

#### `POST /outbound-orders/:id/reservations` (Admin)

Creates a stock reservation for an outbound order.

**Request body:**
```json
{
  "items": [
    {
      "productId": "uuid",
      "locationId": "uuid",
      "qty": 10
    }
  ]
}
```

---

#### `POST /outbound-orders/:id/ship` (Admin)

Ships specific picked quantities for an outbound order.

**Request body:**
```json
{
  "allocationIds": ["uuid1", "uuid2"]
}
```

---

#### `POST /outbound-orders/:id/ship-all` (Admin)

Ships ALL picked quantities for the outbound order at once.

- No request body required.

---

### 3.9 Return Orders

#### `POST /return-orders`

Creates a return order.

- **Auth required:** Yes

**Request body:**
```json
{
  "outboundOrderId": "uuid",
  "warehouseId": "uuid",
  "reason": "damaged goods",
  "items": [
    {
      "productId": "uuid",
      "qty": 5
    }
  ]
}
```

---

#### `GET /return-orders`

Lists all return orders.

- **Query params:** `clientId`, `status`, `warehouseId`

---

#### `GET /return-orders/:id`

Returns a single return order.

---

#### `POST /return-orders/:id/process`

Processes a return order — updates inventory to reflect returned goods.

- No request body needed.

---

### 3.10 Inventory

#### `GET /inventory/client-portal/dashboard`

Returns dashboard KPIs for the authenticated client's inventory.

- **Auth required:** Yes (CLIENT_ACCOUNT)

**Success response (200):**
```json
{
  "totalProducts": 12,
  "totalSkus": 20,
  "totalQuantity": 5400,
  "lowStockItems": 2,
  "stockDistribution": [
    { "name": "منتج أ", "quantity": 1200 }
  ],
  "recentMovements": [
    {
      "date": "2026-01-30T10:00:00.000Z",
      "movementType": "RECEIPT",
      "sku": "SKU-001",
      "qtyChange": 50,
      "referenceId": "INB-00041"
    }
  ]
}
```

---

#### `GET /inventory/client-portal/current-stock`

Returns current stock for the authenticated client.

- **Auth required:** Yes (CLIENT_ACCOUNT)
- **Query params:** `warehouseId`, `asOfDate`

---

#### `GET /inventory/client-portal/ledger`

Returns the inventory ledger (movement history) for the authenticated client.

- **Auth required:** Yes (CLIENT_ACCOUNT)
- **Query params:** `productId`, `from`, `to`, `movementType`

---

#### `GET /inventory/dashboard` (Admin)

Returns aggregated dashboard data. If called by a staff actor, returns all tenants.

- **Auth required:** Yes (JwtAuthGuard)

---

#### `GET /inventory/current-stock` (Admin)

Returns current stock for all or filtered clients.

- **Query params:** `clientId`, `warehouseId`, `productId`, `asOfDate`

---

#### `GET /inventory/current-stock/by-product/:productId` (Admin)

Returns current stock for a specific product.

---

#### `GET /inventory/ledger` (Admin)

Returns inventory ledger with optional filters.

- **Query params:** `clientId`, `productId`, `warehouseId`, `movementType`, `from`, `to`

---

### 3.11 Approvals

All approval endpoints require `JwtAuthGuard`.

#### `GET /approvals`

Returns all pending approval requests.

- **Auth required:** Yes (Admin)
- **Query params:** `status`, `referenceType`, `approvalStep`

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "referenceType": "ORDER",
    "referenceId": "uuid",
    "approvalStep": "INBOUND_ORDER",
    "status": "PENDING",
    "requestedAt": "2026-01-30T10:00:00.000Z",
    "orderInfo": {
      "orderNumber": "INB-00042",
      "clientName": "شركة الأمل",
      "warehouseName": "المستودع الرئيسي - الرياض"
    }
  }
]
```

---

#### `GET /approvals/:id`

Returns a single approval request by ID.

---

#### `POST /approvals/:id/approve`

Approves an approval request. If `referenceType` is `ORDER`, the linked order status changes to `IN_PROGRESS`.

- **Auth required:** Yes (Admin)

**Request body:**
```json
{
  "notes": "تم المراجعة والموافقة"
}
```

**Side effect:** Linked inbound or outbound order status → `IN_PROGRESS`

---

#### `POST /approvals/:id/reject`

Rejects an approval request. Linked order status changes to `CANCELLED`.

- **Auth required:** Yes (Admin)

**Request body:**
```json
{
  "notes": "البيانات غير مكتملة"
}
```

**Side effect:** Linked inbound or outbound order status → `CANCELLED`

---

### 3.12 Billing Plans

All endpoints under `billing/plans` require `JwtAuthGuard`.

#### `POST /billing/plans`

Creates a billing plan.

**Request body:**
```json
{
  "name": "باقة الأساسية",
  "code": "BASIC",
  "planFee": 500.00,
  "inboundCostPerItem": 2.50,
  "outboundCostPerItem": 3.00,
  "weightCostPerKg": 0.50,
  "currency": "SAR"
}
```

---

#### `GET /billing/plans`

Lists all billing plans.

- **Query params:** `isActive`, `code`

---

#### `GET /billing/plans/:id`

Returns a single billing plan.

---

#### `PATCH /billing/plans/:id`

Updates a billing plan.

---

### 3.13 Billing Transactions

#### `GET /billing/transactions`

Returns all billing transactions/charges.

- **Auth required:** Yes
- **Query params:** `clientId`, `category`, `from`, `to`

**`category` values:** `PLAN_FEE`, `INBOUND_ORDER`, `OUTBOUND_ORDER`, `VAS`, `STORAGE`, `OTHER`

**Success response (200):**
```json
[
  {
    "id": "uuid",
    "clientId": "uuid",
    "category": "INBOUND_ORDER",
    "amount": 125.50,
    "description": "Charge for INB-00041 (50 items)",
    "referenceId": "uuid",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
]
```

---

### 3.14 Notifications (Client Portal)

All endpoints under `client-portal/notifications` require `JwtAuthGuard + ClientAccountGuard`.

#### `GET /client-portal/notifications`

Lists notifications for the authenticated user.

- **Query params:** `limit`, `offset`, `isRead`

---

#### `GET /client-portal/notifications/unread`

Returns unread notifications.

- **Query params:** `limit` (default: 5)

---

#### `PATCH /client-portal/notifications/mark-all-read`

Marks all notifications as read.

---

#### `PATCH /client-portal/notifications/:id/read`

Marks a single notification as read.

---

#### `DELETE /client-portal/notifications/:id`

Deletes a notification.

---

## 4. Database Documentation

> Based on `server/prisma/schema.prisma` and `finalschema.sql`.

### Key Enums

| Enum | Values |
|---|---|
| `OrderStatus` | `DRAFT`, `PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`, `CONFIRMED` |
| `ApprovalStatus` | `PENDING`, `APPROVED`, `REJECTED` |
| `ApprovalReferenceType` | `ORDER`, `ADJUSTMENT`, `RETURN` |
| `MovementType` | `RECEIPT`, `SHIPMENT`, `RETURN`, `ADJUSTMENT` |
| `ChargeCategory` | `PLAN_FEE`, `INBOUND_ORDER`, `OUTBOUND_ORDER`, `VAS`, `STORAGE`, `OTHER` |
| `ActorType` | `STAFF`, `CLIENT_ACCOUNT` |
| `TaskStatus` | `PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED` |

---

### Tables & Fields

#### `client`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `code` | VARCHAR | Yes, Unique | Client code |
| `name` | VARCHAR | Yes | Company name |
| `status` | VARCHAR | Yes | Client status |
| `isActive` | BOOLEAN | Yes (default: true) | Active flag |
| `contactEmail` | VARCHAR | No | Contact email |
| `contactPhone` | VARCHAR | No | Contact phone |
| `createdAt` | TIMESTAMPTZ | Yes (auto) | Created at |
| `updatedAt` | TIMESTAMPTZ | Yes (auto) | Updated at |

**Relationships:**
- Has many `client_account`
- Has many `product`
- Has many `inbound_order`
- Has many `outbound_order`
- Has many `billing_transaction`

---

#### `client_account`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Owner client |
| `clientRoleId` | UUID (FK→client_role) | Yes | Assigned role |
| `email` | VARCHAR | Yes, Unique | Login email |
| `passwordHash` | VARCHAR | No | Hashed password |
| `firstName` | VARCHAR | Yes | First name |
| `lastName` | VARCHAR | Yes | Last name |
| `isActive` | BOOLEAN | Yes (default: true) | Account active |
| `createdAt` | TIMESTAMPTZ | Yes (auto) | Created at |

**Relationships:**
- Belongs to `client`
- Belongs to `client_role`

---

#### `client_role`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Owner client |
| `roleName` | VARCHAR | Yes | Role name (e.g., MANAGER) |
| `permissionsJson` | JSONB | No | Permissions array |

---

#### `product`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Owner client |
| `defaultUomId` | UUID (FK→uom) | Yes | Default unit of measure |
| `sku` | VARCHAR | Yes | Stock-keeping unit |
| `name` | VARCHAR | Yes | Product name |
| `minThreshold` | INTEGER | Yes (default: 0) | Low-stock alert threshold |
| `isActive` | BOOLEAN | Yes (default: true) | Active flag |
| `weightKg` | DECIMAL | No | Weight in kilograms |

**Relationships:**
- Belongs to `client`
- Belongs to `uom`
- Has many `inbound_order_item`
- Has many `outbound_order_item`
- Has many `current_stock`

---

#### `uom`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `code` | VARCHAR | Yes, Unique | UOM code (e.g., KG, PCS) |
| `name` | VARCHAR | Yes | UOM name |
| `dimension` | ENUM | Yes | WEIGHT / VOLUME / QUANTITY / etc. |

---

#### `warehouse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `code` | VARCHAR | Yes, Unique | Warehouse code |
| `name` | VARCHAR | Yes | Warehouse name |
| `address` | TEXT | No | Address |
| `city` | VARCHAR | No | City |
| `isActive` | BOOLEAN | Yes (default: true) | Active flag |

**Relationships:**
- Has many `location`
- Has many `inbound_order`
- Has many `outbound_order`

---

#### `location`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `warehouseId` | UUID (FK→warehouse) | Yes | Parent warehouse |
| `parentId` | UUID (FK→location) | No | Parent location (null = root) |
| `code` | VARCHAR | Yes, Unique | Auto-generated location code |
| `name` | VARCHAR | Yes | Location name |
| `type` | ENUM | Yes | ZONE / AISLE / SHELF / BIN |
| `barcode` | VARCHAR | No | Same as code |

---

#### `inbound_order`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Owner client |
| `warehouseId` | UUID (FK→warehouse) | Yes | Target warehouse |
| `orderNumber` | VARCHAR | Yes, Unique | Auto-generated (INB-XXXXX) |
| `status` | ENUM `OrderStatus` | Yes | Current status |
| `expectedDate` | DATE | No | Expected arrival date |
| `notes` | TEXT | No | Free-text notes |
| `createdByActorId` | UUID (FK→actor) | No | Who created it |
| `createdAt` | TIMESTAMPTZ | Yes (auto) | Created at |
| `updatedAt` | TIMESTAMPTZ | Yes (auto) | Updated at |

**Key status rules:**
- Created by client → starts as `PENDING`
- Created by admin → starts as `IN_PROGRESS`
- Approved by admin → `IN_PROGRESS`
- Rejected by admin → `CANCELLED`

---

#### `inbound_order_item`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `inboundOrderId` | UUID (FK→inbound_order) | Yes | Parent order |
| `productId` | UUID (FK→product) | Yes | Product |
| `uomId` | UUID (FK→uom) | Yes | Unit of measure |
| `qtyOrdered` | INTEGER | Yes | Ordered quantity |
| `qtyReceived` | INTEGER | Yes (default: 0) | Actually received quantity |
| `locationId` | UUID (FK→location) | No | Put-away location |
| `batchNumber` | VARCHAR | No | Batch/lot number |

---

#### `outbound_order`

Same structure as `inbound_order` with `orderNumber` prefix `OUT-XXXXX`.

**Additional fields:**
| Field | Type | Description |
|---|---|---|
| `deliveryAddress` | TEXT | Delivery address |

---

#### `outbound_order_item`

Same structure as `inbound_order_item` with:
- `qtyOrdered` — quantity to ship
- `qtyShipped` — actually shipped quantity

---

#### `approval`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `referenceType` | ENUM | Yes | `ORDER`, `ADJUSTMENT`, `RETURN` |
| `referenceId` | UUID | Yes | ID of the linked entity |
| `approvalStep` | VARCHAR | Yes | `INBOUND_ORDER` or `OUTBOUND_ORDER` |
| `status` | ENUM `ApprovalStatus` | Yes | `PENDING`, `APPROVED`, `REJECTED` |
| `requestedByActorId` | UUID (FK→actor) | No | Who submitted it |
| `decidedByActorId` | UUID (FK→actor) | No | Who made the decision |
| `notes` | TEXT | No | Decision notes |
| `requestedAt` | TIMESTAMPTZ | Yes (auto) | When submitted |
| `decidedAt` | TIMESTAMPTZ | No | When decision was made |

---

#### `inventory_ledger`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Owner |
| `productId` | UUID (FK→product) | Yes | Product |
| `warehouseId` | UUID (FK→warehouse) | Yes | Warehouse |
| `locationId` | UUID (FK→location) | No | Specific location |
| `movementType` | ENUM | Yes | `RECEIPT`, `SHIPMENT`, `RETURN`, `ADJUSTMENT` |
| `qtyChange` | INTEGER | Yes | Positive or negative quantity change |
| `quantityBefore` | INTEGER | Yes | Qty before movement |
| `quantityAfter` | INTEGER | Yes | Qty after movement |
| `referenceId` | VARCHAR | No | Order number / reference |
| `date` | TIMESTAMPTZ | Yes | Movement date |

---

#### `current_stock`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID | Yes | Owner |
| `productId` | UUID | Yes | Product |
| `warehouseId` | UUID | Yes | Warehouse |
| `locationId` | UUID | No | Location bin |
| `quantity` | INTEGER | Yes (default: 0) | Current on-hand qty |

**Unique constraint:** `(clientId, productId, warehouseId, locationId)`

---

#### `billing_plan`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `name` | VARCHAR | Yes | Plan name |
| `code` | VARCHAR | Yes, Unique | Plan code |
| `planFee` | DECIMAL | No | Monthly/fixed plan fee |
| `inboundCostPerItem` | DECIMAL | No | Cost per inbound item |
| `outboundCostPerItem` | DECIMAL | No | Cost per outbound item |
| `weightCostPerKg` | DECIMAL | No | Cost per kg |
| `currency` | VARCHAR | Yes (default: SAR) | Currency code |
| `isActive` | BOOLEAN | Yes (default: true) | Active flag |

---

#### `billing_transaction`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `clientId` | UUID (FK→client) | Yes | Charged client |
| `category` | ENUM `ChargeCategory` | Yes | Charge type |
| `amount` | DECIMAL | Yes | Charge amount |
| `description` | TEXT | No | Description |
| `referenceId` | UUID | No | Linked order/entity ID |
| `createdAt` | TIMESTAMPTZ | Yes (auto) | Charge date |

---

#### `notification`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `actorId` | UUID (FK→actor) | Yes | Target user |
| `title` | VARCHAR | Yes | Notification title |
| `body` | TEXT | No | Notification body |
| `isRead` | BOOLEAN | Yes (default: false) | Read flag |
| `createdAt` | TIMESTAMPTZ | Yes (auto) | Created at |

---

#### `actor`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | UUID (PK) | Yes | Primary key |
| `actorType` | ENUM `ActorType` | Yes | `STAFF` or `CLIENT_ACCOUNT` |
| `referenceId` | UUID | Yes, Unique | FK to staff or client_account |

---

### Key Relationships Diagram

```
client ──< client_account >── client_role
client ──< product ──< inbound_order_item
client ──< inbound_order ──< inbound_order_item
client ──< outbound_order ──< outbound_order_item
client ──< billing_transaction
warehouse ──< location (tree structure, self-referential)
warehouse ──< inbound_order
warehouse ──< outbound_order
inbound_order ──> approval (via referenceId)
outbound_order ──> approval (via referenceId)
product ──< current_stock
product ──< inventory_ledger
actor ──< notification
```

---

## 5. Frontend Documentation

### 5.1 Admin Portal

The Admin Portal is a single-page React application at `ClientFinal/admin`. All pages are rendered within the main `App.tsx` using React Router.

**Login URL:** `/` (redirects to `/login` if not authenticated)  
**Base Route:** `/`

| Route | Page Name | Purpose | Key APIs Used |
|---|---|---|---|
| `/dashboard` (or `/overview`) | Dashboard/Overview | KPIs, charts, activity log | `GET /inventory/dashboard`, `GET /dashboard` |
| `/master-data` | Master Data | Manage clients, products, warehouses, locations, UOM | `/clients`, `/products`, `/warehouses`, `/warehouses/:id/locations`, `/uom` |
| `/master-data/clients/:id` | Client Accounts | View accounts linked to a client | `GET /clients/:id/accounts` |
| `/inbound-orders` | Inbound Orders | List and manage inbound orders | `GET /inbound-orders`, `POST /inbound-orders` |
| `/inbound-orders/:id` | Inbound Order Details | View order, add items, receive goods | `GET /inbound-orders/:id`, `POST /inbound-orders/:id/items`, `POST /inbound-orders/:id/receive` |
| `/outbound-orders` | Outbound Orders | List and manage outbound orders | `GET /outbound-orders`, `POST /outbound-orders` |
| `/outbound-orders/:id` | Outbound Order Details | View order, reserve/ship stock | `GET /outbound-orders/:id`, `POST /outbound-orders/:id/reservations`, `POST /outbound-orders/:id/ship-all` |
| `/approvals` | Approvals Center | Review client-created orders awaiting approval | `GET /approvals`, `POST /approvals/:id/approve`, `POST /approvals/:id/reject` |
| `/inventory` | Inventory | View current stock, ledger | `GET /inventory/current-stock`, `GET /inventory/ledger` |
| `/movements` | Movements | View inventory movement history | `GET /inventory/ledger` |
| `/billing` | Billing | Manage billing plans, view transactions | `GET /billing/plans`, `GET /billing/transactions` |
| `/invoices` | Invoices | View invoices | `GET /billing/invoices` |
| `/users` | Users & Access | Manage staff users, roles | `GET /users`, `GET /users/roles` |
| `/work-tasks` | Task Work Orders | Create and manage warehouse tasks | `GET /task-work-orders`, `POST /task-work-orders` |
| `/return-orders` | Return Orders | View and process return orders | `GET /return-orders`, `POST /return-orders/:id/process` |

**Admin Master Data Sub-tabs:**

| Tab | Description |
|---|---|
| العملاء (Clients) | CRUD for client companies |
| المنتجات (Products) | CRUD for products |
| المستودعات (Warehouses) | CRUD for warehouses |
| المواقع (Locations) | Tree-based CRUD for warehouse locations |
| وحدات القياس (UOM) | CRUD for units of measure |

---

### 5.2 Client Portal

The Client Portal is at `ClientFinal/client-portal/src`. Pages are in `src/pages/`.

**Login URL:** `/login`

| Route | Page Name | Purpose | Key APIs Used |
|---|---|---|---|
| `/dashboard` | Dashboard | KPIs, stock distribution, recent movements | `GET /inventory/client-portal/dashboard` |
| `/inventory` | Inventory | View current stock | `GET /inventory/client-portal/current-stock` |
| `/orders` | Orders | View inbound and outbound orders | `GET /inbound-orders/client-portal`, `GET /outbound-orders/client-portal` |
| `/orders/create/inbound` | Create Inbound Order | Create a new inbound order | `POST /inbound-orders/client-portal`, `POST /inbound-orders/client-portal/:id/items` |
| `/orders/create/outbound` | Create Outbound Order | Create a new outbound order | `POST /outbound-orders/client-portal`, `POST /outbound-orders/client-portal/:id/items` |
| `/orders/:id` | Order Details | View order details with timeline | `GET /inbound-orders/client-portal/detail?ref=...` |
| `/movements` | Movements | Inventory movement history | `GET /inventory/client-portal/ledger` |
| `/billing` | Billing | View billing transactions and charges | `GET /billing/client-portal` (assumed) |
| `/invoices` | Invoices | View invoices | `GET /billing/invoices` |
| `/invoices/:id` | Invoice Details | View single invoice | `GET /billing/invoices/:id` |
| `/master-data` | Master Data / Products | View and manage own products | `GET /products/my`, `POST /products/client-portal`, `DELETE /products/:id` |
| `/notifications` | Notifications | View and manage notifications | `GET /client-portal/notifications` |
| `/users` | Team Members | View and manage team accounts | `GET /client-portal/team` |
| `/settings` | Settings | Profile, password, preferences | `PATCH /client-settings/profile`, `PATCH /client-settings/password` |

**Orders Page — Status Filter Options:**

| Filter Value (Arabic) | API Status |
|---|---|
| الكل | (all) |
| بانتظار الموافقة | `PENDING` |
| مؤكد | `CONFIRMED` |
| قيد التنفيذ | `IN_PROGRESS` |
| مكتمل | `COMPLETED` |
| ملغي | `CANCELLED` |

---

## 6. Business Logic Flows

### 6.1 Authentication Flow

```
User enters credentials
        ↓
POST /auth/client/login  (or /staff/login)
        ↓
Backend validates email + password (bcrypt)
        ↓
Checks isActive = true on account
        ↓
Generates accessToken (15 min) + refreshToken (7 days)
        ↓
Frontend stores tokens in localStorage
        ↓
All subsequent requests use Authorization: Bearer <accessToken>
        ↓
When accessToken expires → POST /auth/refresh with refreshToken
```

---

### 6.2 Inbound Order Flow (Client-Created)

```
CLIENT: Navigate to Create Order → Select "وارد" (Inbound)
        ↓
POST /inbound-orders/client-portal  → Order created with status = PENDING
        ↓
POST /inbound-orders/client-portal/:id/items  (for each product)
        ↓
Backend: approvalsService.createRequest() called automatically
         → Creates approval record: referenceType=ORDER, approvalStep=INBOUND_ORDER, status=PENDING
        ↓
ADMIN: Navigates to /approvals
        ↓
GET /approvals → List shows pending order with orderInfo (order number, client, warehouse)
        ↓
Admin reviews order details
        ↓
[APPROVE] POST /approvals/:id/approve
         → Approval status → APPROVED
         → Inbound order status → IN_PROGRESS
         → Order now visible in /inbound-orders (admin)
         → Client sees status "قيد التنفيذ" on portal
        ↓ (OR)
[REJECT] POST /approvals/:id/reject
         → Approval status → REJECTED
         → Inbound order status → CANCELLED
         → Client sees status "ملغي" on portal
```

---

### 6.3 Inbound Order Flow (Admin-Created)

```
ADMIN: Navigate to /inbound-orders → Click "إنشاء طلب وارد"
        ↓
POST /inbound-orders (admin endpoint)
        ↓
Order created with status = IN_PROGRESS immediately (no approval step)
        ↓
POST /inbound-orders/:id/items  (add products)
        ↓
When goods arrive: POST /inbound-orders/:id/receive
        ↓
Backend: inventory_ledger entry created (RECEIPT)
         current_stock updated (+qty)
         Billing charge recorded (INBOUND_ORDER category)
        ↓
Order status → COMPLETED
```

---

### 6.4 Outbound Order Flow (Client-Created)

```
CLIENT: Navigate to Create Order → Select "صادر" (Outbound)
        ↓
POST /outbound-orders/client-portal → status = PENDING
        ↓
POST /outbound-orders/client-portal/:id/items
        ↓
Backend: Approval request created (approvalStep=OUTBOUND_ORDER)
        ↓
ADMIN: Reviews in /approvals
        ↓
[APPROVE] → Order status → IN_PROGRESS
[REJECT]  → Order status → CANCELLED
        ↓
ADMIN: Picks stock via stock reservations
POST /outbound-orders/:id/reservations
        ↓
ADMIN: Ships order
POST /outbound-orders/:id/ship-all
        ↓
Backend: inventory_ledger entry (SHIPMENT)
         current_stock updated (-qty)
         Billing charge recorded (OUTBOUND_ORDER category)
        ↓
Order status → COMPLETED
```

---

### 6.5 Billing Calculation Logic

Billing charges are recorded automatically:

| Trigger | Category | Calculation |
|---|---|---|
| Monthly plan subscription | `PLAN_FEE` | Fixed `billing_plan.planFee` |
| Inbound order receipt | `INBOUND_ORDER` | `qtyReceived × plan.inboundCostPerItem + totalWeightKg × plan.weightCostPerKg` |
| Outbound order shipped | `OUTBOUND_ORDER` | `qtyShipped × plan.outboundCostPerItem + totalWeightKg × plan.weightCostPerKg` |
| VAS used | `VAS` | Based on VAS pricing table |

---

### 6.6 Notification Flow

Notifications are created by the backend and associated to an `actor` (actor = client_account or staff).

```
Backend event occurs (order approved, order status changed, etc.)
        ↓
notification record created in DB (linked to actorId)
        ↓
Client portal: GET /client-portal/notifications/unread (polling or on page load)
        ↓
Badge shows unread count in sidebar
        ↓
User clicks notification → PATCH /client-portal/notifications/:id/read
        ↓
User can delete notification → DELETE /client-portal/notifications/:id
```

---

## 7. Roles & Permissions

### 7.1 ADMIN / Staff

- Logged in via `POST /auth/staff/login`
- No `ClientAccountGuard` — can access all admin endpoints
- Can access:
  - All clients, products, warehouses, locations, UOM (full CRUD)
  - All inbound and outbound orders (full CRUD)
  - Approval center (approve/reject)
  - Inventory (all tenants)
  - Billing plans (full CRUD)
  - Billing transactions (read)
  - Users and roles management
  - Task work orders
  - Return orders
  - Audit logs

### 7.2 CLIENT_ACCOUNT

- Logged in via `POST /auth/client/login`
- Protected by `ClientAccountGuard` — can only access data scoped to their `clientId`
- Can access:
  - Own products (`GET /products/my`, `POST /products/client-portal`, `DELETE /products/:id`)
  - Own inbound/outbound orders (create, view — filtered by clientId)
  - Own inventory and ledger
  - Own notifications
  - Own billing/invoices
  - Own team members
  - Own profile/settings
- **Cannot access:**
  - Other clients' data
  - Admin-only endpoints (no guard bypass)
  - Approval decisions (cannot approve/reject own orders)

---

## 8. QA Test Cases

### 8.1 Authentication

#### TC-AUTH-001: Client login with valid credentials
- **Steps:** POST `/auth/client/login` with correct email and password
- **Expected:** 200 OK, `accessToken` and `refreshToken` returned
- **Type:** Positive

#### TC-AUTH-002: Client login with invalid password
- **Steps:** POST `/auth/client/login` with wrong password
- **Expected:** 401 Unauthorized
- **Type:** Negative

#### TC-AUTH-003: Client login with non-existent email
- **Steps:** POST `/auth/client/login` with unknown email
- **Expected:** 401 Unauthorized
- **Type:** Negative

#### TC-AUTH-004: Client login when account is inactive
- **Steps:** Deactivate account, then attempt login
- **Expected:** 401 Unauthorized
- **Type:** Negative

#### TC-AUTH-005: Staff login with valid credentials
- **Steps:** POST `/auth/staff/login` with correct credentials
- **Expected:** 200 OK, tokens returned
- **Type:** Positive

#### TC-AUTH-006: Refresh token — valid
- **Steps:** POST `/auth/refresh` with a valid refresh token
- **Expected:** 200 OK, new `accessToken` returned
- **Type:** Positive

#### TC-AUTH-007: Refresh token — expired or invalid
- **Steps:** POST `/auth/refresh` with a garbage token
- **Expected:** 401 Unauthorized
- **Type:** Negative

#### TC-AUTH-008: Access protected endpoint without token
- **Steps:** GET `/auth/me` without Authorization header
- **Expected:** 401 Unauthorized
- **Type:** Negative

#### TC-AUTH-009: Access protected endpoint with expired access token
- **Steps:** Use an expired access token
- **Expected:** 401 Unauthorized
- **Type:** Negative

---

### 8.2 Client Portal — Orders

#### TC-ORD-001: Client creates an inbound order
- **Steps:**
  1. Login as CLIENT_ACCOUNT
  2. POST `/inbound-orders/client-portal` with `{ "expectedDate": "2026-04-01" }`
  3. POST `/inbound-orders/client-portal/:orderId/items` with valid productId
- **Expected:** Order created with `status: "PENDING"`, approval record created
- **Type:** Positive (Happy Path)

#### TC-ORD-002: Client views own inbound orders
- **Steps:**
  1. Login as CLIENT_ACCOUNT
  2. GET `/inbound-orders/client-portal`
- **Expected:** 200 OK, only orders belonging to this client's `clientId`
- **Type:** Positive

#### TC-ORD-003: Client cannot view another client's orders
- **Steps:**
  1. Login as CLIENT_ACCOUNT (Client A)
  2. Try GET `/inbound-orders/:id` where `:id` belongs to Client B
- **Expected:** 403 Forbidden or 404 Not Found (order not accessible)
- **Type:** Negative (Authorization)

#### TC-ORD-004: Client creates inbound order with no items
- **Steps:** Create order with no items added
- **Expected:** Order created but `items` array is empty; submission is valid at API level (items can be added later via `/items` endpoint)
- **Type:** Edge Case

#### TC-ORD-005: Client creates inbound order with a product that has no UOM
- **Steps:** Add an item where the product has no `defaultUom`
- **Expected:** Frontend shows error "المنتج بدون وحدة قياس"; API call rejected
- **Type:** Negative

#### TC-ORD-006: Client creates outbound order
- **Steps:**
  1. POST `/outbound-orders/client-portal`
  2. POST `/outbound-orders/client-portal/:id/items`
- **Expected:** 201, `status: "PENDING"`, approval record created with `approvalStep: "OUTBOUND_ORDER"`
- **Type:** Positive

#### TC-ORD-007: Admin views inbound orders — PENDING orders are not shown
- **Steps:** Login as Admin, navigate to inbound orders list
- **Expected:** Orders with status `PENDING` do NOT appear in the main inbound orders table (they appear only in `/approvals`)
- **Type:** Positive (Business Rule Verification)

---

### 8.3 Approvals

#### TC-APP-001: Admin views pending approvals
- **Steps:**
  1. Client creates an inbound order (TC-ORD-001)
  2. Admin: GET `/approvals`
- **Expected:** 200 OK, list includes the new approval with `approvalStep: "INBOUND_ORDER"`, enriched `orderInfo`
- **Type:** Positive

#### TC-APP-002: Admin approves an inbound order
- **Steps:**
  1. TC-ORD-001 completed
  2. POST `/approvals/:id/approve` with `{ "notes": "Approved" }`
- **Expected:**
  - Approval status → `APPROVED`
  - Inbound order status → `IN_PROGRESS`
  - Order appears in admin inbound orders list
  - Client sees "قيد التنفيذ" on portal
- **Type:** Positive (Happy Path)

#### TC-APP-003: Admin rejects an inbound order
- **Steps:**
  1. TC-ORD-001 completed
  2. POST `/approvals/:id/reject` with `{ "notes": "Incomplete data" }`
- **Expected:**
  - Approval status → `REJECTED`
  - Inbound order status → `CANCELLED`
  - Client sees "ملغي" on portal
- **Type:** Positive

#### TC-APP-004: Client cannot access approvals endpoint
- **Steps:** Login as CLIENT_ACCOUNT, GET `/approvals`
- **Expected:** 401 or 403 Forbidden
- **Type:** Negative (Authorization)

#### TC-APP-005: Approve already-decided approval
- **Steps:** Approve an approval that is already `APPROVED`
- **Expected:** 400 Bad Request or 409 Conflict (cannot re-decide)
- **Type:** Edge Case

#### TC-APP-006: Admin-created order bypasses approval
- **Steps:**
  1. Admin: POST `/inbound-orders` with required fields
- **Expected:** Order created with `status: "IN_PROGRESS"` directly; no approval record created
- **Type:** Positive (Business Rule Verification)

---

### 8.4 Products

#### TC-PROD-001: Client creates a product
- **Steps:**
  1. Login as CLIENT_ACCOUNT
  2. POST `/products/client-portal` with `{ "sku": "SKU-NEW", "name": "Test Product", "defaultUomId": "<valid-uuid>" }`
- **Expected:** 201, product created with `clientId` matching authenticated user
- **Type:** Positive

#### TC-PROD-002: Client deletes own product
- **Steps:** DELETE `/products/:id` where product belongs to authenticated client
- **Expected:** 200 OK, product deleted
- **Type:** Positive

#### TC-PROD-003: Client deletes another client's product
- **Steps:** Login as Client A, DELETE `/products/:id` owned by Client B
- **Expected:** 403 Forbidden
- **Type:** Negative

#### TC-PROD-004: Create product with duplicate SKU
- **Steps:** Create two products with the same `sku` and same `clientId`
- **Expected:** 409 Conflict (unique constraint violation)
- **Type:** Negative

#### TC-PROD-005: Create product with invalid UOM ID
- **Steps:** POST `/products/client-portal` with non-existent `defaultUomId`
- **Expected:** 404 Not Found (UOM not found)
- **Type:** Negative

---

### 8.5 UOM

#### TC-UOM-001: Create a UOM
- **Steps:** POST `/uom` with `{ "code": "LTR", "name": "لتر", "dimension": "VOLUME" }`
- **Expected:** 201, UOM created
- **Type:** Positive

#### TC-UOM-002: Delete a UOM that is not referenced
- **Steps:** DELETE `/uom/:id` for a UOM not linked to any product
- **Expected:** 200 OK
- **Type:** Positive

#### TC-UOM-003: Delete a UOM referenced by a product
- **Steps:** DELETE `/uom/:id` for a UOM used by at least one product
- **Expected:** 409 Conflict ("UOM is in use")
- **Type:** Negative

#### TC-UOM-004: Create UOM with duplicate code
- **Steps:** POST `/uom` with a code that already exists
- **Expected:** 409 Conflict
- **Type:** Negative

---

### 8.6 Locations

#### TC-LOC-001: Create a root location in a warehouse
- **Steps:** POST `/warehouses/:warehouseId/locations` with `{ "name": "Zone A", "type": "ZONE" }`
- **Expected:** 201, location created with auto-generated `code`
- **Type:** Positive

#### TC-LOC-002: Create a child location (shelf inside zone)
- **Steps:** POST `/warehouses/:warehouseId/locations` with `{ "name": "Shelf A-01", "type": "SHELF", "parentId": "<zone-uuid>" }`
- **Expected:** 201, location created with parent link
- **Type:** Positive

#### TC-LOC-003: Delete a location with children
- **Steps:** DELETE `/warehouses/:wid/locations/:id` on a location that has child locations
- **Expected:** 409 Conflict ("Location has children")
- **Type:** Negative

#### TC-LOC-004: Delete a location with stock
- **Steps:** DELETE `/warehouses/:wid/locations/:id` on a location with inventory
- **Expected:** 409 Conflict ("Location has stock")
- **Type:** Negative

#### TC-LOC-005: Get location tree
- **Steps:** GET `/locations/tree`
- **Expected:** 200, nested tree structure returned
- **Type:** Positive

#### TC-LOC-006: Get flat location list filtered by warehouse
- **Steps:** GET `/locations/flat?warehouseId=<uuid>`
- **Expected:** 200, flat list of locations for that warehouse only
- **Type:** Positive

---

### 8.7 Inventory

#### TC-INV-001: Client views own dashboard
- **Steps:** GET `/inventory/client-portal/dashboard` as CLIENT_ACCOUNT
- **Expected:** 200, KPIs scoped to this client's inventory only
- **Type:** Positive

#### TC-INV-002: Client views current stock
- **Steps:** GET `/inventory/client-portal/current-stock` as CLIENT_ACCOUNT
- **Expected:** 200, only this client's stock items returned
- **Type:** Positive

#### TC-INV-003: Client views inventory ledger
- **Steps:** GET `/inventory/client-portal/ledger` as CLIENT_ACCOUNT
- **Expected:** 200, only this client's movements returned
- **Type:** Positive

#### TC-INV-004: Stock increases after inbound order receipt
- **Steps:**
  1. Note current stock for a product
  2. Admin creates inbound order, adds 50 items, receives them
- **Expected:** `current_stock.quantity` increases by 50; a `RECEIPT` entry appears in `inventory_ledger`
- **Type:** Positive (Business Rule)

#### TC-INV-005: Stock decreases after outbound order ships
- **Steps:**
  1. Note current stock for a product
  2. Admin creates outbound order, reserves and ships 20 items
- **Expected:** `current_stock.quantity` decreases by 20; a `SHIPMENT` entry appears in `inventory_ledger`
- **Type:** Positive (Business Rule)

---

### 8.8 Billing

#### TC-BILL-001: Create a billing plan
- **Steps:** POST `/billing/plans` with valid plan fields
- **Expected:** 201, plan created
- **Type:** Positive

#### TC-BILL-002: View billing transactions
- **Steps:** GET `/billing/transactions`
- **Expected:** 200, list of charge records returned
- **Type:** Positive

#### TC-BILL-003: Inbound receipt creates billing charge
- **Steps:** Complete TC-INV-004, then check billing transactions for the client
- **Expected:** A `INBOUND_ORDER` charge record exists with correct amount
- **Type:** Positive (Business Rule)

#### TC-BILL-004: Outbound shipment creates billing charge
- **Steps:** Complete TC-INV-005, then check billing transactions
- **Expected:** An `OUTBOUND_ORDER` charge record exists
- **Type:** Positive (Business Rule)

---

### 8.9 Notifications

#### TC-NOTIF-001: Client views unread notifications
- **Steps:** GET `/client-portal/notifications/unread` as CLIENT_ACCOUNT
- **Expected:** 200, list of unread notifications (max 5 by default)
- **Type:** Positive

#### TC-NOTIF-002: Mark single notification as read
- **Steps:** PATCH `/client-portal/notifications/:id/read`
- **Expected:** 200, `isRead` becomes `true`
- **Type:** Positive

#### TC-NOTIF-003: Mark all notifications as read
- **Steps:** PATCH `/client-portal/notifications/mark-all-read`
- **Expected:** 200, all notifications for actor set to `isRead = true`
- **Type:** Positive

#### TC-NOTIF-004: Delete a notification
- **Steps:** DELETE `/client-portal/notifications/:id`
- **Expected:** 200, notification removed
- **Type:** Positive

#### TC-NOTIF-005: Delete another actor's notification
- **Steps:** Login as Actor A, DELETE notification belonging to Actor B
- **Expected:** 403 Forbidden or 404 Not Found
- **Type:** Negative (Authorization)

---

### 8.10 Edge Cases

#### TC-EDGE-001: Submit inbound order with quantity = 0
- **Steps:** POST `/inbound-orders/client-portal/:id/items` with `qtyOrdered: 0`
- **Expected:** 400 Bad Request (validation failure)
- **Type:** Edge Case

#### TC-EDGE-002: Access endpoint with malformed UUID
- **Steps:** GET `/inbound-orders/not-a-uuid`
- **Expected:** 400 Bad Request (ParseUUIDPipe validation)
- **Type:** Edge Case

#### TC-EDGE-003: Missing required request body fields
- **Steps:** POST `/auth/client/login` with empty body `{}`
- **Expected:** 400 Bad Request with field validation messages
- **Type:** Edge Case

#### TC-EDGE-004: Filter inventory by non-existent warehouseId
- **Steps:** GET `/inventory/current-stock?warehouseId=00000000-0000-0000-0000-000000000000`
- **Expected:** 200 OK with empty results (not 404)
- **Type:** Edge Case

#### TC-EDGE-005: Client creates outbound order when stock is insufficient
- **Steps:** Create outbound order with quantity exceeding available stock, then admin ships
- **Expected:** Error on ship step ("Insufficient stock")
- **Type:** Edge Case / Negative

#### TC-EDGE-006: Approve same order twice
- **Steps:** Approve an approval request twice
- **Expected:** Second approval attempt returns 400 or 409
- **Type:** Edge Case

#### TC-EDGE-007: Client accesses admin-only endpoint (e.g., POST `/inbound-orders`)
- **Steps:** Login as CLIENT_ACCOUNT, POST to admin-only order endpoint
- **Expected:** 401 or 403 Forbidden (no ClientAccountGuard bypass)
- **Type:** Negative (Authorization)

#### TC-EDGE-008: `GET /locations/flat` with no warehouseId
- **Steps:** GET `/locations/flat` without query parameter
- **Expected:** 200 OK, all locations across all warehouses returned
- **Type:** Positive (Edge Case — optional param)

---

### 8.11 Frontend UI Test Cases

#### TC-UI-001: Client portal login page renders correctly
- **Steps:** Navigate to `/login` (client portal)
- **Expected:** Green-themed login form visible, no blue colors present

#### TC-UI-002: Dashboard loads after login
- **Steps:** Login as CLIENT_ACCOUNT, navigate to `/dashboard`
- **Expected:** KPI cards, stock distribution chart, recent movements table all load within 5 seconds

#### TC-UI-003: PENDING orders show "بانتظار الموافقة" status
- **Steps:** Create order as client, view on `/orders`
- **Expected:** Status badge shows "بانتظار الموافقة" in yellow

#### TC-UI-004: Approved order shows "قيد التنفيذ" status
- **Steps:** Admin approves order, client refreshes `/orders`
- **Expected:** Status badge shows "قيد التنفيذ" in blue/indigo

#### TC-UI-005: Admin approvals page shows order type badge
- **Steps:** Admin navigates to `/approvals`
- **Expected:** Each row has a "النوع" column showing "وارد" or "صادر" badge

#### TC-UI-006: CSV download works on all main tables
- **Steps:** Navigate to any page with a table (Orders, Inventory, Movements, Billing, etc.), click the CSV button
- **Expected:** File downloads with correct column headers and data

#### TC-UI-007: Admin master data — UOM delete blocked if in use
- **Steps:** In `/master-data` UOM tab, try to delete a UOM linked to products
- **Expected:** Error message displayed, UOM not deleted

#### TC-UI-008: Location barcode dialog renders correctly
- **Steps:** In admin `/master-data` Locations tab, click barcode icon for a location
- **Expected:** Dialog opens, barcode image rendered correctly (not blank)

#### TC-UI-009: Order status filter on client portal
- **Steps:** On `/orders`, change status filter dropdown
- **Expected:** Table updates to show only orders matching selected status

#### TC-UI-010: Notifications bell shows unread count
- **Steps:** Login as client with unread notifications
- **Expected:** Bell icon shows badge with correct unread count

---

## Appendix: Status Reference

### Order Status

| Status | Arabic Label | Admin Created | Client Created | After Approval | After Rejection |
|---|---|---|---|---|---|
| `PENDING` | بانتظار الموافقة | ✗ | ✓ (initial) | — | — |
| `IN_PROGRESS` | قيد التنفيذ | ✓ (initial) | — | ✓ | — |
| `COMPLETED` | مكتمل | — | — | After goods received/shipped | — |
| `CANCELLED` | ملغي | — | — | — | ✓ |
| `DRAFT` | مسودة | Optional | — | — | — |
| `CONFIRMED` | مؤكد | Optional | — | — | — |

### Approval Status

| Status | Meaning |
|---|---|
| `PENDING` | Awaiting admin review |
| `APPROVED` | Admin approved; order proceeds |
| `REJECTED` | Admin rejected; order cancelled |

---

*End of QA Documentation*
