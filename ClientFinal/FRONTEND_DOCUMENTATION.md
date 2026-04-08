# React frontend documentation

This document describes the React applications under `ClientFinal/`. The repository root may list untracked paths such as `client/admin` / `client/client-portal`; the **implemented** UIs analyzed here live in **`ClientFinal/admin`** (staff console) and **`ClientFinal/client-portal`** (client portal).

**Shared configuration**

- API base URL: `import.meta.env.VITE_API_URL` or default `http://127.0.0.1:3000`.
- HTTP helper: `apiFetch` in each app’s `src/lib/api.ts` (JSON, `Content-Type: application/json`, `Authorization: Bearer <token>` when present).

---

## 1. Pages and routes

### 1.1 Client portal (`ClientFinal/client-portal`)

Routing uses **`react-router-dom`** (`<Routes>` / `<Route>`) in `src/App.tsx`.

| Path | Page component | Notes |
|------|----------------|--------|
| `/` | Redirect | → `/dashboard` |
| `/dashboard` | `DashboardPage` | |
| `/inventory` | `InventoryPage` | |
| `/master-data` | `MasterDataPage` | Wraps product management (`ProductsPage` in a tab) |
| `/products` | `ProductsPage` | **Not linked from the sidebar**; reachable by URL only (duplicate entry point vs master data) |
| `/orders` | `OrdersPage` | |
| `/orders/create/:type` | `CreateOrderPage` | `type` = `inbound` → inbound, else outbound |
| `/orders/:type/:orderNumber` | `OrderDetailsPage` | |
| `/movements` | `MovementsPage` | |
| `/reports` | Inline `ReportsPage` (in `App.tsx`) | |
| `/billing` | `BillingPage` | |
| `/invoices` | `InvoicesPage` | |
| `/invoices/:invoiceId` | `InvoiceDetailsPage` | |
| `/users` | `UsersPage` | Team / client accounts |
| `/notifications` | `NotificationsPage` | |
| `/settings` | `SettingsPage` | |
| `*` | Redirect | → `/dashboard` |

Sidebar labels map to routes via `labelToRoute` (e.g. التقارير → `/reports`). There is **no** sidebar item for `/products` (only `/master-data`).

---

### 1.2 Admin / staff app (`ClientFinal/admin`)

The UI is implemented as **one large `App.tsx`** (~10k+ lines). **`BrowserRouter`** wraps the app (`src/main.tsx`), but **there is no `<Routes>` tree**. Instead, `useLocation().pathname` is synced to local state `activePage` and related IDs (`selectedInboundOrderId`, etc.) in a `useEffect`.

**Effective URL map** (bookmarkable; back/forward supported for listed paths):

| Path pattern | `activePage` / behavior |
|--------------|-------------------------|
| `/` | Redirect → `/overview` |
| `/overview` | `overview` |
| `/work-management` | `work-management` |
| `/identity-access` | `identity-access` |
| `/master-data` | `master-data` |
| `/inbound-orders` | `inbound-orders` |
| `/inbound-orders/:orderId` | `inbound-order-workspace` |
| `/outbound-orders` | `outbound-orders` |
| `/outbound-orders/:orderId` | `outbound-order-workspace` |
| `/inventory` | `inventory` |
| `/inventory/ledger` or `/inventory/ledger/:itemId` | `inventory-ledger` |
| `/adjustments` | `adjustments` |
| `/returns` | `returns` |
| `/returns/:returnId` | `return-workspace` |
| `/reports` | `reports` |
| `/reports/:reportType` | `report-detail` (`inventory`, `orders`, or generic placeholder) |
| `/billing` | `billing` |
| `/value-added-services` | `value-added-services` |
| `/approvals` | `approvals-center` |

`PAGE_TO_PATH` maps sidebar pages to these paths (workspace/detail routes are reached via `navigate()` from list views, not all listed in `PAGE_TO_PATH`).

---

## 2. Components and responsibilities

### 2.1 Client portal

| Area | Responsibility |
|------|----------------|
| **`App.tsx`** | Auth gate, shell (sidebar, header, user menu), `Routes`, inline **Reports** page (static/mock behavior), notifications dropdown |
| **`components/LoginPage.tsx`** | Client login form → `loginClient` |
| **`components/NotificationsDropdown.tsx`** | Unread notifications, mark read, link to `/notifications` |
| **`components/CsvButton.tsx`** | Client-side CSV export from table data |
| **`components/BarcodeInput.tsx`** | Barcode-focused input (used where scanning is needed) |
| **`pages/*Page.tsx`** | Feature screens: dashboard, inventory, orders, create/detail orders, billing, invoices, users, movements, settings, notifications, products |
| **`pages/MasterDataPage.tsx`** | Tab shell; currently only “products” tab embedding `ProductsPage` |
| **`components/ui/*`** | shadcn-style primitives (button, card, dialog, table, etc.) |
| **`api/*.ts`** | Typed wrappers around `apiFetch` per domain |
| **`lib/api.ts`** | `apiFetch`, `buildApiUrl`, token key `clientAuthToken` |
| **`lib/auth.ts`** | Client login, `/auth/me`, logout |

### 2.2 Admin

| Area | Responsibility |
|------|----------------|
| **`App.tsx`** | Entire staff UI: sidebar, header, login gate, and **all** feature views as inner functions (e.g. `WorkManagementPage`, `IdentityAndAccessPage`, `MasterDataPage`, inbound/outbound list + workspace, inventory + ledger, adjustments, returns, reports, billing, VAS, approvals) |
| **`components/LoginPage.tsx`** | Staff login → `loginStaff` |
| **`components/CsvButton.tsx`** | CSV export |
| **`components/LocationBarcodeDialog.tsx`** | Location barcode display/print helper |
| **`components/ui/*`** | Shared UI primitives |
| **`lib/*.ts`** | API modules: `dashboard`, `task-work-orders`, `master-data`, `identity-access`, `inbound-orders`, `outbound-orders`, `auth`, `api` |

---

## 3. API calls (endpoint, method, payload)

Below, paths are relative to `VITE_API_URL`. **Auth:** staff uses `authToken`; client portal uses `clientAuthToken`.

### 3.1 Auth (both apps)

| App | Method | Path | Body / notes |
|-----|--------|------|----------------|
| Client | `POST` | `/auth/client/login` | `{ email, password }` → stores `accessToken` |
| Admin | `POST` | `/auth/staff/login` | `{ email, password }` → stores `accessToken` |
| Both | `GET` | `/auth/me` | Current user (Bearer) |

**Note:** Responses include `refreshToken`, but the frontends **do not** implement refresh-token rotation or automatic renewal.

---

### 3.2 Client portal (`src/api/*`, `src/lib/auth.ts`)

| Domain | Method | Path | Query / body |
|--------|--------|------|----------------|
| Dashboard | `GET` | `/inventory/client-portal/dashboard` | — |
| Current stock | `GET` | `/inventory/client-portal/current-stock` | `?dateFrom=&dateTo=` |
| Ledger / movements | `GET` | `/inventory/client-portal/ledger` | `dateFrom`, `dateTo`, `movementType`, `warehouseId`, `productId` |
| Inbound list | `GET` | `/inbound-orders/client-portal` | `expectedDateFrom`, `expectedDateTo` |
| Outbound list | `GET` | `/outbound-orders/client-portal` | `expectedShipDateFrom`, `expectedShipDateTo` |
| Inbound detail | `GET` | `/inbound-orders/client-portal/detail` | `?ref=` |
| Outbound detail | `GET` | `/outbound-orders/client-portal/detail` | `?ref=` |
| Create inbound | `POST` | `/inbound-orders/client-portal` | `{ expectedDate? }` |
| Create outbound | `POST` | `/outbound-orders/client-portal` | `{ expectedShipDate? }` |
| Add inbound line | `POST` | `/inbound-orders/client-portal/:orderId/items` | `{ productId, qtyOrdered, uomId }` |
| Add outbound line | `POST` | `/outbound-orders/client-portal/:orderId/items` | `{ productId, qtyOrdered, uomId }` |
| Warehouses (portal) | `GET` | `/warehouses/client-portal/list` | — |
| Products (portal list) | `GET` | `/products/client-portal/list` | — |
| My products | `GET` | `/products/my` | — |
| Create product | `POST` | `/products/client-portal` | See `CreateProductPayload` in `clientPortalProducts.ts` |
| Update product | `PATCH` | `/products/client-portal/:id` | Partial fields |
| Delete product | `DELETE` | `/products/:id` | — |
| UOM list | `GET` | `/uom` | — |
| Billing overview | `GET` | `/billing/client-portal/overview` | — |
| Invoices list | `GET` | `/billing/client-portal/invoices` | `status`, `periodFrom`, `periodTo` |
| Invoice detail | `GET` | `/billing/client-portal/invoices/:id` | — |
| Settings | `GET` | `/client-settings/me` | — |
| Profile | `PATCH` | `/client-settings/me/profile` | `{ firstName?, lastName?, email? }` |
| Password | `PATCH` | `/client-settings/me/password` | `{ currentPassword, newPassword }` |
| Preferences | `PATCH` | `/client-settings/me/preferences` | `{ language?, timezone?, notificationsEnabled? }` |
| Team roles | `GET` | `/client-portal/team/roles` | — |
| Team accounts | `GET` | `/client-portal/team/accounts` | `isActive`, `clientRoleId`, `search` |
| Invite account | `POST` | `/client-portal/team/accounts` | `{ firstName, lastName, email, clientRoleId }` |
| Update account | `PATCH` | `/client-portal/team/accounts/:id` | Partial |
| Set active | `PATCH` | `/client-portal/team/accounts/:id/active` | `{ isActive }` |
| Notifications | `GET` | `/client-portal/notifications` | filters |
| Unread | `GET` | `/client-portal/notifications/unread?limit=` | (fallback logic in client if 404) |
| Mark all read | `PATCH` | `/client-portal/notifications/mark-all-read` | (fallback: loop per item) |
| Mark one read | `PATCH` | `/client-portal/notifications/:id/read` | — |
| Delete notification | `DELETE` | `/client-portal/notifications/:id` | — |

---

### 3.3 Admin (`src/lib/*.ts` and inline `apiFetch` in `App.tsx`)

| Module / usage | Method | Path | Notes |
|----------------|--------|------|--------|
| Dashboard | `GET` | `/dashboard/overview` | Summary + charts + activity |
| Task work orders | `GET` | `/task-work-orders` | Query: `taskType`, `status`, `dueFrom`, `dueTo`, `referenceId` |
| Task work orders | `POST` | `/task-work-orders` | Create payload |
| Task work orders | `POST` | `/task-work-orders/:id/assign` | `{ assignedUserId }` |
| Task work orders | `PATCH` | `/task-work-orders/:id` | e.g. `IN_PROGRESS` |
| Task work orders | `POST` | `/task-work-orders/:id/complete` | — |
| Users / roles | `GET`/`PATCH` | `/users`, `/users/:id`, `/users/roles`, etc. | See `identity-access.ts` |
| Warehouses | `GET` | `/warehouses` | |
| Clients / products / locations / UOM | Various | `/clients`, `/products`, `/warehouses`, `/locations/tree`, `/uom`, … | CRUD in `master-data.ts` |
| Inbound orders | Various | `/inbound-orders`, `/inbound-orders/:id`, items, receive | `inbound-orders.ts` + `App.tsx` |
| Outbound orders | Various | `/outbound-orders`, items, `/reservations`, `/ship-all` | `outbound-orders.ts` + `App.tsx` |
| Inventory | `GET` | `/inventory/current-stock` | Used in admin flows |
| Ledger | `GET` | `/inventory/ledger` | Query string built in app |
| Adjustments | `GET` | `/adjustments` | Query filters |
| Adjustments | `POST` | `/adjustments` | Create |
| Adjustments | `POST` | `/adjustments/:id/apply` | Apply |
| Adjustments | `POST` | `/adjustments/:id/reject` | Reject |
| Return orders | `GET` | `/return-orders` | List |
| Billing (admin) | `GET`/`POST`/`PATCH` | `/billing/plans`, `/billing/plans/:id` | Plans management UI |
| VAS | `GET`/`POST`/`PATCH` | `/vas`, `/vas/:id` | Value-added services |
| Approvals | `GET` | `/approvals` | Query params |
| Approvals | `POST` | `/approvals/:id/approve` | |
| Approvals | `POST` | `/approvals/:id/reject` | |

---

## 4. User actions (buttons, forms) — intended behavior

### 4.1 Client portal

| Location | Action | Intended behavior |
|----------|--------|-------------------|
| Login | Submit | `POST /auth/client/login`, store token, navigate to dashboard |
| Dashboard | Refresh | Reload dashboard API data |
| Inventory | Filters / load | Load current stock with optional date range |
| Orders | Tabs, filters | Load inbound or outbound lists with date filters; navigate to create or detail |
| Create order | Add lines, submit | Create order then POST each line with default UOM |
| Order detail | Load | Fetch detail by ref for inbound or outbound |
| Movements | Filters | Load ledger + warehouse list for filters |
| Master data / Products | CRUD | List my products, create/update/delete, UOM selection |
| Billing | — | Show usage/plan overview from API |
| Invoices | Filters, row actions | List and open detail |
| Users | Invite, edit, activate | Team APIs |
| Notifications | Filters, mark read, delete | As implemented in `NotificationsPage` / dropdown |
| Settings | Profile / password / preferences | PATCH endpoints |
| Navbar search | *(input only)* | **No navigation or API wired** |
| Reports (`App.tsx`) | Generate, CSV, PDF, download rows | **Mostly console / static data** (see §5) |

### 4.2 Admin

| Location | Action | Intended behavior |
|----------|--------|-------------------|
| Login | Submit | Staff login |
| Overview | — | `GET /dashboard/overview` drives KPIs and charts |
| Work management | Filters, task actions | Task work order APIs |
| Identity & access | Users, roles | `identity-access` APIs |
| Master data | CRUD clients, products, warehouses, locations, UOM | `master-data` APIs |
| Inbound / outbound | Lists and workspaces | Fetch orders, edit, receive (inbound), ship/reserve (outbound) as coded |
| Inventory / ledger | View stock and ledger | `apiFetch` to inventory endpoints |
| Adjustments | List, create, apply, reject | `/adjustments` |
| Returns | List and workspace | `/return-orders` |
| Billing / VAS / Approvals | CRUD / approve / reject | Respective routes above |
| Reports hub | Open report type | Navigates to `/reports/:type` |
| Navbar search | *(input only)* | **Not connected** |
| Bell icon | *(badge only)* | **No notifications API on admin shell** |

---

## 5. Missing or non-functional features

| Item | Details |
|------|---------|
| **Client portal – Reports** | `ReportsPage` inside `client-portal/src/App.tsx` uses **hardcoded** warehouses and `generatedReportsData`. `handleGenerateReport` / `handleDownloadReport` only **`console.log`**. “تنزيل CSV/PDF” buttons next to generate have **no `onClick` handlers**. |
| **Admin – Reports** | `InventoryReportPage` / `OrdersReportPage` use **static** `inventoryData` / `ordersData` and static charts; filters do not call the backend. Generic `report-detail` for other `reportType` values uses placeholder table/chart data (`BaseReportPage`). |
| **Admin – Overview** | A **legacy** `salesData` constant exists at file top; the live overview uses **`overviewData` from the API** when rendering charts—verify no remaining chart still bound to the static array (the overview section maps `overviewData.salesByMonth`). |
| **Refresh tokens** | Login responses include `refreshToken`, but **no refresh flow** is implemented; long sessions may fail until re-login. |
| **Client portal – Orphan route** | `/products` duplicates product management also under `/master-data`; sidebar does not link to `/products`. |

---

## 6. UI elements not connected to the backend

| App | Element | Notes |
|-----|---------|--------|
| Client portal | Header **search** field | No submit handler, no API |
| Client portal | Reports page secondary export buttons | CSV/PDF outline buttons without handlers |
| Admin | Header **search** | Decorative |
| Admin | **Notifications** bell | Static red dot; no fetch of notifications in the shell |
| Admin | Report **sub-pages** (inventory/orders/other) | Largely static/demo data unless later wired |
| Client portal | Reports table | Static “generated reports” list |

---

## 7. Logical or state management issues

| Topic | Issue |
|-------|--------|
| **Architecture** | Admin packs **all screens into one file** (`App.tsx`). This complicates testing, code splitting, and reuse. State is **local `useState`** plus URL sync—no global store. |
| **Client portal auth vs API errors** | `apiFetch` in client portal does **not** auto-clear token on 401 (unlike admin `apiFetch`). Failed requests may surface generic errors until the user logs out manually. |
| **Duplicate product routes** | `/master-data` and `/products` both render product management; can confuse users and analytics. |
| **Admin URL sync `useEffect`** | Depends on `[location.pathname, authenticated]`; unknown paths may not update `activePage` predictably—confirm fallback behavior for typos (most unlisted paths may leave stale `activePage`). |
| **Notifications fallbacks** | Client notifications API uses **404 fallbacks** (e.g. mark-all-read) that loop alternate endpoints—works around missing routes but adds latency and partial-failure modes. |
| **Order creation navigation** | After successful create in `CreateOrderPage`, `onCancel()` returns to orders list without deep-linking to the new order ID (UX gap, not necessarily a bug). |

---

## Appendix: quick file map

```
ClientFinal/
├── admin/src/
│   ├── App.tsx              # Entire staff UI + routes via pathname
│   ├── main.tsx
│   ├── components/
│   └── lib/                 # api, auth, dashboard, master-data, orders, etc.
└── client-portal/src/
    ├── App.tsx              # Shell + Routes + inline Reports
    ├── main.tsx
    ├── api/                 # clientPortal*.ts
    ├── pages/
    ├── components/
    └── lib/                 # api, auth
```

---

*Generated from static analysis of `ClientFinal/admin` and `ClientFinal/client-portal`. Behavior should be re-verified against the live Nest (or other) API implementation.*
