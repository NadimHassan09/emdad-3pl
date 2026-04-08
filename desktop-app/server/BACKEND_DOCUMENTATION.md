# NestJS backend documentation

This document describes the API under `server/src`, how it maps to Prisma/PostgreSQL, and how it compares to the React frontends in `ClientFinal/`.

**Bootstrap** (`main.ts`): global `ValidationPipe` (whitelist, forbid non-whitelisted, transform), `AllExceptionsFilter`, CORS (reflects any `Origin`), default port **3000**.

**Auth**: JWT Bearer on protected routes via `JwtAuthGuard`. Client-only routes add `ClientAccountGuard` (requires `actorType === CLIENT_ACCOUNT` and `clientId`).

---

## 1. Modules, controllers, services

| Module | Controllers | Service(s) (primary) | Role |
|--------|-------------|----------------------|------|
| `database` | — | `PrismaService` | PostgreSQL via Prisma |
| `auth` | `AuthController` | `AuthService` | Login, refresh, `/auth/me` |
| `actors` | *(none)* | `ActorsService` | Links users/client accounts to `Actor` rows |
| `clients` | `ClientsController` | `ClientsService` | Tenant CRUD, client accounts |
| `users` | `UsersController` | `UsersService` | Internal users, roles |
| `warehouses` | `WarehousesController` | `WarehousesService` | Warehouses + client-portal list |
| `locations` | `LocationsController`, `WarehouseLocationsController` | `LocationsService` | Tree/flat + per-warehouse CRUD |
| `uom` | `UomController` | `UomService` | Units of measure |
| `products` | `ProductsController` | `ProductsService` | Products + client-portal CRUD |
| `batches` | `BatchesController` | `BatchesService` | Batches |
| `inventory` | `InventoryController` | `InventoryService` | Dashboard aggregates, current stock, ledger |
| `inbound-orders` | `InboundOrdersController` | `InboundOrdersService` | Inbound + client portal |
| `outbound-orders` | `OutboundOrdersController` | `OutboundOrdersService` | Outbound + client portal |
| `stock-reservations` | `StockReservationsController` | `StockReservationsService` | Reservations, ship, pick |
| `task-work-orders` | `TaskWorkOrdersController` | `TaskWorkOrdersService` | Operational tasks |
| `adjustments` | `AdjustmentsController` | `AdjustmentsService` | Stock adjustments |
| `return-orders` | `ReturnOrdersController` | `ReturnOrdersService` | Returns |
| `approvals` | `ApprovalsController` | `ApprovalsService` | Approval workflow |
| `audit` | `AuditController` | `AuditService` | Audit log read |
| `billing` | `BillingPlansController`, `ClientBillingPlansController`, `BillingClientPortalController`, `InvoicesController`, `BillingTransactionsController` | respective `*Service` | Plans, invoices, client billing |
| `vas` | `VasController`, `VasPricingController` | `VasService`, `VasPricingService` | Value-added services |
| `client-settings` | `ClientSettingsController` | `ClientSettingsService` | Profile, password, preferences |
| `dashboard` | `DashboardController` | `DashboardService` | Staff overview KPIs |
| `client-portal-team` | `ClientPortalTeamController` | `ClientPortalTeamService` | Client-scoped team accounts |
| `client-portal-notifications` | `ClientPortalNotificationsController` | `ClientPortalNotificationsService` | Client notifications |
| `mail` | *(no HTTP controller in tree)* | Mail helpers | Email (supporting) |
| *(root)* | `AppController` | — | Health/info |

---

## 2. All API endpoints (method, route, purpose)

Routes are **relative to the API root** (no global prefix). Guards summarized as: **Public** | **JWT** | **JWT + Client**.

### 2.1 Root & auth

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/` | Public | API info JSON |
| `POST` | `/auth/client/login` | Public | Client portal login |
| `POST` | `/auth/staff/login` | Public | Staff login |
| `POST` | `/auth/refresh` | Public | New access token from refresh JWT body |
| `GET` | `/auth/me` | JWT | Current actor (`JwtPayload`) |

### 2.2 Dashboard (staff)

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/dashboard/overview` | JWT | Aggregated KPIs, charts, activity (staff) |

### 2.3 Clients

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/clients` | **Public** | Create client |
| `GET` | `/clients` | **Public** | List/filter clients |
| `GET` | `/clients/:id` | **Public** | Get one |
| `GET` | `/clients/:id/accounts` | **Public** | Client accounts |
| `PATCH` | `/clients/:id` | **Public** | Update client |

### 2.4 Users & roles

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/users/roles` | JWT | List roles |
| `GET` | `/users/roles/with-permissions` | JWT | Roles + permissions |
| `GET` | `/users/roles/:roleId` | JWT | One role |
| `POST` | `/users/roles` | JWT | Create role |
| `PATCH` | `/users/roles/:roleId` | JWT | Update role |
| `GET` | `/users` | JWT | List users |
| `PATCH` | `/users/:id` | JWT | Update user |

### 2.5 Warehouses & locations

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/warehouses/client-portal/list` | JWT + Client | Active warehouses (see §7) |
| `POST` | `/warehouses` | **Public** | Create warehouse |
| `GET` | `/warehouses` | **Public** | List |
| `GET` | `/warehouses/:id` | **Public** | Get one |
| `PATCH` | `/warehouses/:id` | **Public** | Update |
| `GET` | `/locations/tree` | **Public** | Location tree |
| `GET` | `/locations/flat` | **Public** | Flat list (`warehouseId` optional) |
| `POST` | `/warehouses/:warehouseId/locations` | **Public** | Create location |
| `GET` | `/warehouses/:warehouseId/locations` | **Public** | List |
| `PATCH` | `/warehouses/:warehouseId/locations/:id` | **Public** | Update |
| `DELETE` | `/warehouses/:warehouseId/locations/:id` | **Public** | Delete |

### 2.6 UOM

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/uom` | **Public** | Create |
| `GET` | `/uom` | **Public** | List |
| `GET` | `/uom/:id` | **Public** | Get one |
| `PATCH` | `/uom/:id` | **Public** | Update |
| `DELETE` | `/uom/:id` | **Public** | Delete |

### 2.7 Products

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/products/client-portal/list` | JWT + Client | Products for logged-in client |
| `GET` | `/products/my` | JWT + Client | Same as portal list (implementation) |
| `POST` | `/products/client-portal` | JWT + Client | Create product (client) |
| `PATCH` | `/products/client-portal/:id` | JWT + Client | Update product (client) |
| `DELETE` | `/products/:id` | JWT + Client | Delete **if** owned by client (service enforces) |
| `POST` | `/products` | **Public** | Staff create (no guard on controller) |
| `GET` | `/products` | **Public** | List |
| `GET` | `/products/:id` | **Public** | Get one |
| `PATCH` | `/products/:id` | **Public** | Update |

### 2.8 Batches

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/batches` | **Public** | Create |
| `GET` | `/batches` | **Public** | List |
| `GET` | `/batches/:id` | **Public** | Get one |
| `PATCH` | `/batches/:id` | **Public** | Update |

### 2.9 Inventory

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/inventory/client-portal/dashboard` | JWT + Client | Client-scoped dashboard stats/charts |
| `GET` | `/inventory/client-portal/current-stock` | JWT + Client | Client-scoped stock |
| `GET` | `/inventory/client-portal/ledger` | JWT + Client | Client-scoped ledger |
| `GET` | `/inventory/dashboard` | JWT | Inventory dashboard (`clientId` optional in service → all tenants if internal) |
| `GET` | `/inventory/current-stock` | **Public** | Stock query (filters optional; **empty filter = all clients**) |
| `GET` | `/inventory/current-stock/by-product/:productId` | **Public** | By product |
| `GET` | `/inventory/ledger` | **Public** | Ledger query (**empty filter = all rows**) |

### 2.10 Inbound orders

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/inbound-orders/client-portal` | JWT + Client | Client’s orders |
| `GET` | `/inbound-orders/client-portal/detail?ref=` | JWT + Client | Detail by reference |
| `POST` | `/inbound-orders/client-portal` | JWT + Client | Create draft/simple inbound |
| `POST` | `/inbound-orders/client-portal/:orderId/items` | JWT + Client | Add line |
| `POST` | `/inbound-orders` | JWT | Staff create |
| `GET` | `/inbound-orders` | JWT | List |
| `GET` | `/inbound-orders/:id` | JWT | Get one |
| `PATCH` | `/inbound-orders/:id` | JWT | Update |
| `POST` | `/inbound-orders/:id/items` | JWT | Add item |
| `POST` | `/inbound-orders/:id/receive` | JWT | Receive |

### 2.11 Outbound orders

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/outbound-orders/client-portal` | JWT + Client | Client’s orders |
| `GET` | `/outbound-orders/client-portal/detail?ref=` | JWT + Client | Detail by reference |
| `POST` | `/outbound-orders/client-portal` | JWT + Client | Create |
| `POST` | `/outbound-orders/client-portal/:orderId/items` | JWT + Client | Add line |
| `POST` | `/outbound-orders` | JWT | Staff create |
| `GET` | `/outbound-orders` | JWT | List |
| `GET` | `/outbound-orders/:id` | JWT | Get one |
| `PATCH` | `/outbound-orders/:id` | JWT | Update |
| `POST` | `/outbound-orders/:id/items` | JWT | Add item |
| `POST` | `/outbound-orders/:id/reservations` | JWT | Create stock reservation |
| `POST` | `/outbound-orders/:id/ship` | JWT | Ship with body (`ShipOrderDto`) |
| `POST` | `/outbound-orders/:id/ship-all` | JWT | Auto-ship full picked order |

### 2.12 Stock reservations

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/stock-reservations/:id` | JWT | Get reservation |
| `POST` | `/stock-reservations/:id/confirm` | JWT | Confirm |
| `POST` | `/stock-reservations/:id/release` | JWT | Release |
| `POST` | `/stock-reservations/outbound-allocations/:id/pick` | JWT | Pick allocation |

### 2.13 Task work orders

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/task-work-orders` | JWT | Create |
| `GET` | `/task-work-orders` | JWT | List (query filters) |
| `GET` | `/task-work-orders/:id` | JWT | Get one |
| `PATCH` | `/task-work-orders/:id` | JWT | Update status, etc. |
| `POST` | `/task-work-orders/:id/assign` | JWT | Assign user |
| `POST` | `/task-work-orders/:id/complete` | JWT | Complete |

### 2.14 Adjustments

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/adjustments` | JWT | Create adjustment |
| `GET` | `/adjustments` | JWT | List |
| `GET` | `/adjustments/:id` | JWT | Get one |
| `POST` | `/adjustments/:id/apply` | JWT | Apply |
| `POST` | `/adjustments/:id/reject` | JWT | Reject |

### 2.15 Return orders

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/return-orders` | JWT | Create |
| `GET` | `/return-orders` | JWT | List |
| `GET` | `/return-orders/:id` | JWT | Get one |
| `POST` | `/return-orders/:id/process` | JWT | Process |

### 2.16 Approvals

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/approvals` | JWT | List |
| `GET` | `/approvals/:id` | JWT | Get one |
| `POST` | `/approvals/:id/approve` | JWT | Approve (`ApprovalDecisionDto`) |
| `POST` | `/approvals/:id/reject` | JWT | Reject (`ApprovalDecisionDto`) |

### 2.17 Audit

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/audit-logs` | JWT | List |
| `GET` | `/audit-logs/:id` | JWT | Get one |

### 2.18 Billing

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/billing/plans` | JWT | Create plan |
| `GET` | `/billing/plans` | JWT | List plans |
| `GET` | `/billing/plans/:id` | JWT | Get plan |
| `PATCH` | `/billing/plans/:id` | JWT | Update plan |
| `POST` | `/billing/client-plans` | JWT | Client billing plan attach/update |
| `GET` | `/billing/client-plans` | JWT | List |
| `GET` | `/billing/client-plans/:id` | JWT | Get |
| `PATCH` | `/billing/client-plans/:id` | JWT | Update |
| `GET` | `/billing/transactions` | JWT | Transactions |
| `POST` | `/billing/invoices/generate` | JWT | Generate invoice |
| `GET` | `/billing/invoices` | JWT | List invoices |
| `GET` | `/billing/invoices/:id` | JWT | Invoice detail |
| `GET` | `/billing/client-portal/overview` | JWT + Client | Client billing overview |
| `GET` | `/billing/client-portal/invoices` | JWT + Client | Client’s invoices |
| `GET` | `/billing/client-portal/invoices/:id` | JWT + Client | Client invoice detail |

### 2.19 VAS

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `POST` | `/vas` | JWT | Create service |
| `GET` | `/vas` | JWT | List |
| `GET` | `/vas/:id` | JWT | Get |
| `PATCH` | `/vas/:id` | JWT | Update |
| `POST` | `/vas/pricing` | JWT | Create pricing |
| `GET` | `/vas/pricing` | JWT | List |
| `GET` | `/vas/pricing/:id` | JWT | Get |
| `PATCH` | `/vas/pricing/:id` | JWT | Update |

### 2.20 Client settings (portal)

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/client-settings/me` | JWT + Client | Profile + preferences + security summary |
| `PATCH` | `/client-settings/me/profile` | JWT + Client | Update profile |
| `PATCH` | `/client-settings/me/password` | JWT + Client | Change password |
| `PATCH` | `/client-settings/me/preferences` | JWT + Client | Preferences |

### 2.21 Client portal team

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/client-portal/team/roles` | JWT + Client | Client roles |
| `GET` | `/client-portal/team/accounts` | JWT + Client | Team accounts |
| `POST` | `/client-portal/team/accounts` | JWT + Client | Invite / create |
| `PATCH` | `/client-portal/team/accounts/:id` | JWT + Client | Update |
| `PATCH` | `/client-portal/team/accounts/:id/active` | JWT + Client | Activate/deactivate |

### 2.22 Client portal notifications

| Method | Route | Guards | Purpose |
|--------|-------|--------|---------|
| `GET` | `/client-portal/notifications` | JWT + Client | List (query DTO) |
| `GET` | `/client-portal/notifications/unread` | JWT + Client | Unread list |
| `PATCH` | `/client-portal/notifications/mark-all-read` | JWT + Client | Mark all read |
| `PATCH` | `/client-portal/notifications/:id/read` | JWT + Client | Mark one read |
| `DELETE` | `/client-portal/notifications/:id` | JWT + Client | Delete |

---

## 3. Request and response structure (summary)

- **Validation**: DTO classes per module (`dto/*.dto.ts`) with `class-validator` decorators; non-whitelisted properties are rejected globally.
- **Login** (`POST /auth/*/login`): response `AuthTokensResponseDto` — `accessToken`, `refreshToken`, `expiresIn` (seconds), `user` (JWT payload shape: `actorId`, `actorType`, `sub`, optional `clientId`, `role`, `permissions`, `type`).
- **Refresh** (`POST /auth/refresh`): body `{ refreshToken }` → `AuthRefreshResponseDto` (`accessToken`, `expiresIn`, `user`).
- **Me** (`GET /auth/me`): returns `JwtPayload` as JSON.
- **Lists**: most modules return Prisma models or selected fields; filters are query DTOs (e.g. `InboundOrderFilterDto`, `CurrentStockFilterDto`).
- **Errors**: `AllExceptionsFilter` wraps exceptions; validation errors return structured 400 responses.

For exact field names, see each module’s `dto/` folder and Prisma models.

---

## 4. Database interactions

- **ORM**: Prisma (`prisma/schema.prisma`) against PostgreSQL.
- **Core entities** (non-exhaustive): `Client`, `ClientAccount`, `User`, `Actor`, `Warehouse`, `Location`, `Product`, `Uom`, `Batch`, `CurrentStock`, `InventoryLedger`, `InboundOrder`, `OutboundOrder`, `StockReservation`, `TaskWorkOrder`, `Adjustment`, `ReturnOrder`, `Approval`, `Invoice`, `ClientNotification`, etc.
- **Inventory rules** (documented in `InventoryService`): `inventory_ledger` is append-only source of truth; `current_stock` is derived via DB triggers; app code should use controlled write paths (ledger entries via domain services).

---

## 5. Business logic description (high level)

| Area | Logic |
|------|--------|
| **Auth** | Validates credentials, ensures `Actor` row, issues JWT access + refresh; `/auth/me` reads token payload. |
| **Inbound/outbound** | Order lifecycle, line items, receiving (inbound), reservations and shipping (outbound); client portal restricted by `clientId` from JWT. |
| **Stock** | Reservations and shipments update stock through reservation/shipment services; ledger records movements. |
| **Task work orders** | Operational tasks linked to clients/warehouses; assign/complete flows. |
| **Adjustments / returns** | Structured stock corrections and return processing. |
| **Approvals** | Pending approvals with approve/reject and optional decision payload. |
| **Billing** | Plans, client plans, invoices, client-portal views of invoices and usage-style overview. |
| **Dashboard** | `DashboardService.getOverview()` aggregates counts, stock, orders, approvals across Prisma models. |
| **Client portal dashboard** | `InventoryService.getDashboard(clientId)` scopes all queries to one tenant. |

---

## 6. Errors or incorrect logic / security gaps

1. **Unauthenticated master data and inventory reads (critical)**  
   Controllers for **`clients`, `uom`, `locations`, `warehouses` (except the guarded client-portal route), `products` (staff routes), `batches`** have **no `JwtAuthGuard`**. Anyone who can reach the API can list/create/update/delete depending on the endpoint.

2. **Unauthenticated inventory reporting (critical)**  
   `GET /inventory/current-stock`, `GET /inventory/current-stock/by-product/:productId`, and `GET /inventory/ledger` are **Public**. With no `clientId` filter, `findCurrentStock` / `findLedger` return **cross-tenant** data (see `InventoryService`: empty `where` = full table visibility).

3. **Products staff routes**  
   `POST/GET/PATCH` on `/products` (non–client-portal) are **Public** on the controller; this is inconsistent with a secured WMS API.

4. **Client portal warehouses**  
   `GET /warehouses/client-portal/list` returns **all active warehouses** in the system (not filtered by client assignment). For multi-tenant UX this may be wrong unless every client may ship to any warehouse by design.

5. **Route ordering / Nest behavior**  
   Static paths (e.g. `client-portal/list`) are correctly declared before `:id` routes where applicable. No obvious shadowing bug found for products vs `DELETE :id` (method-specific).

6. **Approvals reject/approve**  
   Backend uses **`POST`** for `:id/approve` and `:id/reject`. Any frontend calling `PATCH` would fail (staff UI should match `POST`).

---

## 7. Missing endpoints required by frontends

Reference: `ClientFinal/` React apps (see `ClientFinal/FRONTEND_DOCUMENTATION.md`).

| Frontend need | Backend status |
|---------------|----------------|
| **Staff overview** | **Covered**: `GET /dashboard/overview` |
| **Client dashboard** | **Covered**: `GET /inventory/client-portal/dashboard` |
| **Reports (PDF/CSV, generated reports)** | **Not implemented** as a dedicated reporting/export module; UIs use static/mock data. |
| **Staff notification center** | **No** `GET /notifications` for internal users; admin shell shows a decorative bell only. |
| **Global search** | **No** unified search endpoint (frontends have non-functional search inputs). |
| **Token refresh from SPA** | **Backend has** `POST /auth/refresh`; **frontends do not call it** (tokens expire without silent refresh). |

---

## 8. Frontend ↔ backend inconsistencies

| Topic | Detail |
|-------|--------|
| **Auth refresh** | Backend exposes `/auth/refresh`; client and admin SPAs store `refreshToken` in login types but **do not use** it. |
| **Inventory (staff)** | Admin app calls **`/inventory/current-stock`** and **`/inventory/ledger`** with JWT (works if user sends a token manually), but those routes are **Public** on the server—behavior is inconsistent with “staff-only” intent; **authorization should be enforced server-side**. |
| **Approvals** | Ensure staff UI uses **`POST`** approve/reject with **`ApprovalDecisionDto`** body if the service expects notes/reason. |
| **Billing (staff)** | Multiple billing surfaces: `/billing/plans`, `/billing/client-plans`, `/billing/invoices`, etc. The admin UI may not expose all of them—verify each screen maps to the correct controller. |
| **Client portal warehouses** | Frontend expects a warehouse list for filters; backend returns **all** active warehouses—confirm product requirement (per-client vs global 3PL). |
| **Notifications API** | Backend notification shape uses **`readStatus`** (`READ`/`UNREAD`) and maps from DB `isRead`; aligned with client portal notification client code. |
| **Reports** | Frontends’ report pages are largely **not backed** by APIs; any future reporting module would be **new** work on both sides. |

---

## Appendix: related files

- Entry: `server/src/main.ts`, `server/src/app.module.ts`
- Prisma: `server/prisma/schema.prisma`
- Guards: `server/src/common/guards/*.ts`

*This document was generated from controller/service analysis of the repository; verify against deployed configuration and integration tests before relying on it for compliance or security audits.*
