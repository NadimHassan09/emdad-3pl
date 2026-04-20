import { apiFetch } from './api';

// --- API response types (backend shape) ---
export interface ClientApi {
  id: string;
  code: string;
  name: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
  addressLine1?: string | null;
  city?: string | null;
  stateRegion?: string | null;
  postalCode?: string | null;
  countryCode?: string | null;
  status: string;
  isActive: boolean;
  createdAt: string;
}

export interface ProductApi {
  id: string;
  clientId: string;
  sku: string;
  name: string;
  defaultUomId: string;
  defaultUom?: { id: string; code: string; name: string };
  client?: { id: string; name: string };
  isActive: boolean;
  minThreshold?: number | null;
}

export interface WarehouseApi {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
  capacityValue?: number | null;
  capacityUomId?: string | null;
}

export interface LocationTreeNodeApi {
  id: string;
  code: string;
  locationType: string;
  parentLocationId: string | null;
  warehouseId?: string;
  children: LocationTreeNodeApi[];
}

export interface UomApi {
  id: string;
  code: string;
  name: string;
  dimension?: string;
  baseConversion?: number;
  isActive: boolean;
}

// --- UI types (used by MasterDataPage) ---
export interface ClientUi {
  id: string;
  name: string;
  code: string;
  contactEmail: string;
  contactPhone: string;
  status: 'نشط' | 'غير نشط';
  createdAt: string;
  address?: string;
}

export interface ProductUi {
  id: string;
  name: string;
  sku: string;
  clientName: string;
  clientId: string;
  status: 'نشط' | 'غير نشط';
  defaultUomId: string;
  baseUOM?: string;
}

export interface WarehouseUi {
  id: string;
  name: string;
  code: string;
  status: 'نشط' | 'غير نشط';
  address: string;
  adjustmentApproverRequired: boolean;
}

export interface LocationUi {
  id: string;
  code: string;
  name: string;
  type: string;
  parentId?: string;
  warehouseId: string;
  active: boolean;
  children?: LocationUi[];
}

function clientStatusToUi(status: string, isActive: boolean): 'نشط' | 'غير نشط' {
  return status === 'ACTIVE' && isActive ? 'نشط' : 'غير نشط';
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toISOString().split('T')[0];
  } catch {
    return iso;
  }
}

export function mapClientApiToUi(c: ClientApi): ClientUi {
  const address = [c.addressLine1, c.city, c.stateRegion, c.postalCode, c.countryCode]
    .filter(Boolean)
    .join(', ') || undefined;
  return {
    id: c.id,
    name: c.name,
    code: c.code,
    contactEmail: c.contactEmail ?? '',
    contactPhone: c.contactPhone ?? '',
    status: clientStatusToUi(c.status, c.isActive),
    createdAt: formatDate(c.createdAt),
    address,
  };
}

export function mapProductApiToUi(p: ProductApi): ProductUi {
  return {
    id: p.id,
    name: p.name,
    sku: p.sku,
    clientName: p.client?.name ?? '',
    clientId: p.clientId,
    status: p.isActive ? 'نشط' : 'غير نشط',
    defaultUomId: p.defaultUomId,
    baseUOM: p.defaultUom?.code ?? p.defaultUom?.name,
  };
}

export function mapWarehouseApiToUi(w: WarehouseApi): WarehouseUi {
  return {
    id: w.id,
    name: w.name,
    code: w.code,
    status: w.isActive ? 'نشط' : 'غير نشط',
    address: '', // backend has no address field
    adjustmentApproverRequired: false, // backend has no such field
  };
}

function mapLocationNodeToUi(node: LocationTreeNodeApi): LocationUi {
  const ui: LocationUi = {
    id: node.id,
    code: node.code,
    name: node.code,
    type: node.locationType,
    parentId: node.parentLocationId ?? undefined,
    warehouseId: node.warehouseId ?? '',
    active: true,
  };
  if (node.children?.length) {
    ui.children = node.children.map(mapLocationNodeToUi);
  }
  return ui;
}

// --- Filters (query params) ---
export interface ClientFilter {
  isActive?: boolean;
  status?: string;
}

export interface ProductFilter {
  clientId?: string;
  isActive?: boolean;
}

export interface WarehouseFilter {
  isActive?: boolean;
}

// --- Fetch ---
export async function fetchClients(filter?: ClientFilter): Promise<ClientUi[]> {
  const params = new URLSearchParams();
  if (filter?.isActive !== undefined) params.set('isActive', String(filter.isActive));
  if (filter?.status) params.set('status', filter.status);
  const q = params.toString();
  const list = await apiFetch<ClientApi[]>(`/clients${q ? `?${q}` : ''}`);
  return (Array.isArray(list) ? list : []).map(mapClientApiToUi);
}

export async function fetchProducts(filter?: ProductFilter): Promise<ProductUi[]> {
  const params = new URLSearchParams();
  if (filter?.clientId) params.set('clientId', filter.clientId);
  if (filter?.isActive !== undefined) params.set('isActive', String(filter.isActive));
  const q = params.toString();
  const list = await apiFetch<ProductApi[]>(`/products${q ? `?${q}` : ''}`);
  return (Array.isArray(list) ? list : []).map(mapProductApiToUi);
}

export async function fetchWarehouses(filter?: WarehouseFilter): Promise<WarehouseUi[]> {
  const params = new URLSearchParams();
  if (filter?.isActive !== undefined) params.set('isActive', String(filter.isActive));
  const q = params.toString();
  const list = await apiFetch<WarehouseApi[]>(`/warehouses${q ? `?${q}` : ''}`);
  return (Array.isArray(list) ? list : []).map(mapWarehouseApiToUi);
}

export async function fetchLocationsTree(): Promise<LocationUi[]> {
  const tree = await apiFetch<LocationTreeNodeApi[]>('/locations/tree');
  const arr = Array.isArray(tree) ? tree : [];
  return arr.map(mapLocationNodeToUi);
}

export interface LocationFlatApi {
  id: string;
  code: string;
  barcode: string;
  locationType: string;
  parentLocationId: string | null;
  parentCode: string | null;
  warehouseId: string;
  warehouseName: string;
  warehouseCode: string;
  isActive: boolean;
  capacityValue: number | null;
  createdAt: string;
}

export const LOCATION_TYPES = ['ZONE', 'AISLE', 'RACK', 'BIN', 'STAGING'] as const;
export type LocationTypeValue = (typeof LOCATION_TYPES)[number];
export const LOCATION_TYPE_LABELS: Record<LocationTypeValue, string> = {
  ZONE: 'منطقة',
  AISLE: 'ممر',
  RACK: 'رف',
  BIN: 'خانة',
  STAGING: 'منطقة تجميع',
};

/**
 * Fetches a flat list of locations by combining the existing
 * GET /locations/tree and GET /warehouses endpoints.
 * This avoids depending on the newer GET /locations/flat endpoint
 * that may not yet be deployed on the server.
 */
export async function fetchLocationsFlat(warehouseId?: string): Promise<LocationFlatApi[]> {
  const [rawTree, rawWarehouses] = await Promise.all([
    apiFetch<LocationTreeNodeApi[]>('/locations/tree').catch(() => [] as LocationTreeNodeApi[]),
    apiFetch<WarehouseApi[]>('/warehouses').catch(() => [] as WarehouseApi[]),
  ]);

  const warehouseMap = new Map(
    (Array.isArray(rawWarehouses) ? rawWarehouses : []).map((w) => [w.id, w]),
  );

  // Flatten tree recursively and build id→code lookup
  const allNodes: LocationTreeNodeApi[] = [];
  function collect(nodes: LocationTreeNodeApi[]) {
    for (const n of nodes) {
      allNodes.push(n);
      if (n.children?.length) collect(n.children);
    }
  }
  collect(Array.isArray(rawTree) ? rawTree : []);

  const idToCode = new Map(allNodes.map((n) => [n.id, n.code]));

  return allNodes
    .filter((n) => !warehouseId || n.warehouseId === warehouseId)
    .map((n) => {
      const wh = warehouseMap.get(n.warehouseId ?? '');
      return {
        id: n.id,
        code: n.code,
        barcode: n.code,
        locationType: n.locationType,
        parentLocationId: n.parentLocationId,
        parentCode: n.parentLocationId ? (idToCode.get(n.parentLocationId) ?? null) : null,
        warehouseId: n.warehouseId ?? '',
        warehouseName: wh?.name ?? '',
        warehouseCode: wh?.code ?? '',
        isActive: true,
        capacityValue: null,
        createdAt: '',
      } satisfies LocationFlatApi;
    });
}

export interface CreateLocationPayload {
  code: string;
  locationType: LocationTypeValue;
  parentLocationId?: string;
  isActive?: boolean;
}

const LOCATION_TYPE_ABBREV: Record<string, string> = {
  ZONE: 'ZN',
  AISLE: 'AS',
  RACK: 'RK',
  BIN: 'BN',
  STAGING: 'ST',
};

/** Generate a unique-enough location code on the client side. */
export function generateLocationCode(warehouseCode: string, locationType: string): string {
  const safe = warehouseCode.replace(/[^A-Za-z0-9]/g, '').slice(0, 6).toUpperCase() || 'WH';
  const abbrev = LOCATION_TYPE_ABBREV[locationType] ?? locationType.slice(0, 2).toUpperCase();
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${safe}-${abbrev}-${suffix}`;
}

export interface UpdateLocationPayload {
  locationType?: LocationTypeValue;
  parentLocationId?: string | null;
  isActive?: boolean;
}

export async function createLocation(
  warehouseId: string,
  payload: CreateLocationPayload,
): Promise<LocationFlatApi> {
  return apiFetch<LocationFlatApi>(`/warehouses/${warehouseId}/locations`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateLocation(
  warehouseId: string,
  id: string,
  payload: UpdateLocationPayload,
): Promise<LocationFlatApi> {
  return apiFetch<LocationFlatApi>(`/warehouses/${warehouseId}/locations/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function deleteLocation(
  warehouseId: string,
  id: string,
): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>(`/warehouses/${warehouseId}/locations/${id}`, {
    method: 'DELETE',
  });
}

export async function fetchUomList(): Promise<UomApi[]> {
  const list = await apiFetch<UomApi[]>('/uom');
  return Array.isArray(list) ? list : [];
}

export const UOM_DIMENSIONS = ['COUNT', 'LENGTH', 'WEIGHT', 'VOLUME', 'TEMPERATURE'] as const;
export type UomDimension = (typeof UOM_DIMENSIONS)[number];

export const UOM_DIMENSION_LABELS: Record<UomDimension, string> = {
  COUNT: 'عدد',
  LENGTH: 'طول',
  WEIGHT: 'وزن',
  VOLUME: 'حجم',
  TEMPERATURE: 'درجة حرارة',
};

export interface CreateUomPayload {
  code: string;
  name: string;
  dimension: UomDimension;
  baseConversion?: number;
  isActive?: boolean;
}

export interface UpdateUomPayload {
  code?: string;
  name?: string;
  dimension?: UomDimension;
  baseConversion?: number;
  isActive?: boolean;
}

export async function createUom(payload: CreateUomPayload): Promise<UomApi> {
  return apiFetch<UomApi>('/uom', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateUom(id: string, payload: UpdateUomPayload): Promise<UomApi> {
  return apiFetch<UomApi>(`/uom/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function deleteUom(id: string): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>(`/uom/${id}`, { method: 'DELETE' });
}

export interface ClientAccountApi {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  clientRoleId: string;
  roleName: string;
  createdAt: string;
}

export async function fetchClientAccounts(clientId: string): Promise<ClientAccountApi[]> {
  const list = await apiFetch<ClientAccountApi[]>(`/clients/${clientId}/accounts`);
  return Array.isArray(list) ? list : [];
}

export interface ClientRoleCatalogPanel {
  key: string;
  label: string;
  features: Array<{
    key: string;
    label: string;
    permissions: string[];
  }>;
}

export interface ClientRoleInfo {
  id: string;
  roleName: string;
  isActive?: boolean;
  permissionsJson?: { permissions?: string[] } | string[];
}

export interface CreateClientRolePayload {
  roleName: string;
  permissions?: string[];
}

export interface UpdateClientRolePayload {
  roleName?: string;
  permissions?: string[];
  isActive?: boolean;
}

export interface CreateClientAccountPayload {
  firstName: string;
  lastName: string;
  email: string;
  clientRoleId: string;
}

export interface UpdateClientAccountPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  clientRoleId?: string;
}

export async function fetchClientRoleCatalog(): Promise<ClientRoleCatalogPanel[]> {
  const data = await apiFetch<ClientRoleCatalogPanel[]>('/clients/roles/catalog');
  return Array.isArray(data) ? data : [];
}

export async function fetchClientRoles(): Promise<ClientRoleInfo[]> {
  const data = await apiFetch<ClientRoleInfo[]>('/clients/roles');
  return Array.isArray(data) ? data : [];
}

export async function fetchClientRolesWithPermissions(): Promise<ClientRoleInfo[]> {
  const data = await apiFetch<ClientRoleInfo[]>('/clients/roles/with-permissions');
  return Array.isArray(data) ? data : [];
}

export async function createClientRole(payload: CreateClientRolePayload): Promise<ClientRoleInfo> {
  return apiFetch<ClientRoleInfo>('/clients/roles', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateClientRole(
  roleId: string,
  payload: UpdateClientRolePayload,
): Promise<ClientRoleInfo> {
  return apiFetch<ClientRoleInfo>(`/clients/roles/${roleId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function createClientAccount(
  clientId: string,
  payload: CreateClientAccountPayload,
): Promise<{ account: ClientAccountApi; temporaryPassword: string }> {
  return apiFetch<{ account: ClientAccountApi; temporaryPassword: string }>(
    `/clients/${clientId}/accounts`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  );
}

export async function updateClientAccount(
  clientId: string,
  accountId: string,
  payload: UpdateClientAccountPayload,
): Promise<ClientAccountApi> {
  return apiFetch<ClientAccountApi>(`/clients/${clientId}/accounts/${accountId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function setClientAccountActive(
  clientId: string,
  accountId: string,
  isActive: boolean,
): Promise<{ id: string; isActive: boolean }> {
  return apiFetch<{ id: string; isActive: boolean }>(
    `/clients/${clientId}/accounts/${accountId}/active`,
    {
      method: 'PATCH',
      body: JSON.stringify({ isActive }),
    },
  );
}

// --- Create / Update ---
export interface CreateClientPayload {
  code: string;
  name: string;
  contactEmail?: string;
  contactPhone?: string;
  addressLine1?: string;
  city?: string;
  stateRegion?: string;
  postalCode?: string;
  countryCode?: string;
  status?: string;
  isActive?: boolean;
}

export interface OnboardClientPayload extends CreateClientPayload {
  accounts?: CreateClientAccountPayload[];
}

export interface UpdateClientPayload {
  code?: string;
  name?: string;
  contactEmail?: string;
  contactPhone?: string;
  addressLine1?: string;
  city?: string;
  stateRegion?: string;
  postalCode?: string;
  countryCode?: string;
  status?: string;
  isActive?: boolean;
}

export async function createClient(payload: CreateClientPayload): Promise<ClientUi> {
  const body: Record<string, unknown> = {
    code: payload.code.trim(),
    name: payload.name.trim(),
    contactEmail: payload.contactEmail?.trim() || undefined,
    contactPhone: payload.contactPhone?.trim() || undefined,
    addressLine1: payload.addressLine1?.trim() || undefined,
    city: payload.city?.trim() || undefined,
    stateRegion: payload.stateRegion?.trim() || undefined,
    postalCode: payload.postalCode?.trim() || undefined,
    countryCode: payload.countryCode?.trim() || undefined,
    status: payload.status === 'نشط' ? 'ACTIVE' : payload.status === 'غير نشط' ? 'SUSPENDED' : 'ACTIVE',
    isActive: payload.status === 'نشط' || payload.isActive !== false,
  };
  const created = await apiFetch<ClientApi>('/clients', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return mapClientApiToUi(created);
}

export async function onboardClient(payload: OnboardClientPayload): Promise<{
  client: ClientApi;
  accounts: Array<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    roleName: string;
    temporaryPassword: string;
  }>;
}> {
  const body: Record<string, unknown> = {
    code: payload.code.trim(),
    name: payload.name.trim(),
    contactEmail: payload.contactEmail?.trim() || undefined,
    contactPhone: payload.contactPhone?.trim() || undefined,
    addressLine1: payload.addressLine1?.trim() || undefined,
    city: payload.city?.trim() || undefined,
    stateRegion: payload.stateRegion?.trim() || undefined,
    postalCode: payload.postalCode?.trim() || undefined,
    countryCode: payload.countryCode?.trim() || undefined,
    status: payload.status === 'نشط' ? 'ACTIVE' : payload.status === 'غير نشط' ? 'SUSPENDED' : 'ACTIVE',
    isActive: payload.status === 'نشط' || payload.isActive !== false,
    accounts: payload.accounts ?? [],
  };
  return apiFetch('/clients/onboard', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function updateClient(id: string, payload: UpdateClientPayload): Promise<ClientUi> {
  const body: Record<string, unknown> = {};
  if (payload.code !== undefined) body.code = payload.code.trim();
  if (payload.name !== undefined) body.name = payload.name.trim();
  if (payload.contactEmail !== undefined) body.contactEmail = payload.contactEmail?.trim() || null;
  if (payload.contactPhone !== undefined) body.contactPhone = payload.contactPhone?.trim() || null;
  if (payload.addressLine1 !== undefined) body.addressLine1 = payload.addressLine1?.trim() || null;
  if (payload.city !== undefined) body.city = payload.city?.trim() || null;
  if (payload.stateRegion !== undefined) body.stateRegion = payload.stateRegion?.trim() || null;
  if (payload.postalCode !== undefined) body.postalCode = payload.postalCode?.trim() || null;
  if (payload.countryCode !== undefined) body.countryCode = payload.countryCode?.trim() || null;
  if (payload.status !== undefined) {
    body.status = payload.status === 'نشط' ? 'ACTIVE' : payload.status === 'غير نشط' ? 'SUSPENDED' : 'ACTIVE';
  }
  if (payload.isActive !== undefined) body.isActive = payload.isActive;
  const updated = await apiFetch<ClientApi>(`/clients/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return mapClientApiToUi(updated);
}

export interface CreateProductPayload {
  clientId: string;
  sku: string;
  name: string;
  defaultUomId: string;
  minThreshold?: number;
  isActive?: boolean;
}

export interface UpdateProductPayload {
  sku?: string;
  name?: string;
  defaultUomId?: string;
  minThreshold?: number;
  isActive?: boolean;
}

export async function createProduct(payload: CreateProductPayload): Promise<ProductUi> {
  const created = await apiFetch<ProductApi>('/products', {
    method: 'POST',
    body: JSON.stringify({
      clientId: payload.clientId,
      sku: payload.sku.trim(),
      name: payload.name.trim(),
      defaultUomId: payload.defaultUomId,
      minThreshold: payload.minThreshold ?? 0,
      isActive: payload.isActive !== false,
    }),
  });
  return mapProductApiToUi(created);
}

export async function updateProduct(id: string, payload: UpdateProductPayload): Promise<ProductUi> {
  const body: Record<string, unknown> = {};
  if (payload.sku !== undefined) body.sku = payload.sku.trim();
  if (payload.name !== undefined) body.name = payload.name.trim();
  if (payload.defaultUomId !== undefined) body.defaultUomId = payload.defaultUomId;
  if (payload.minThreshold !== undefined) body.minThreshold = payload.minThreshold;
  if (payload.isActive !== undefined) body.isActive = payload.isActive;
  const updated = await apiFetch<ProductApi>(`/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return mapProductApiToUi(updated);
}

export interface CreateWarehousePayload {
  code: string;
  name: string;
  capacityValue?: number;
  capacityUomId?: string;
  isActive?: boolean;
}

export interface UpdateWarehousePayload {
  code?: string;
  name?: string;
  capacityValue?: number;
  capacityUomId?: string;
  isActive?: boolean;
}

export async function createWarehouse(payload: CreateWarehousePayload): Promise<WarehouseUi> {
  const created = await apiFetch<WarehouseApi>('/warehouses', {
    method: 'POST',
    body: JSON.stringify({
      code: payload.code.trim(),
      name: payload.name.trim(),
      capacityValue: payload.capacityValue,
      capacityUomId: payload.capacityUomId,
      isActive: payload.isActive !== false,
    }),
  });
  return mapWarehouseApiToUi(created);
}

export async function updateWarehouse(id: string, payload: UpdateWarehousePayload): Promise<WarehouseUi> {
  const body: Record<string, unknown> = {};
  if (payload.code !== undefined) body.code = payload.code.trim();
  if (payload.name !== undefined) body.name = payload.name.trim();
  if (payload.capacityValue !== undefined) body.capacityValue = payload.capacityValue;
  if (payload.capacityUomId !== undefined) body.capacityUomId = payload.capacityUomId;
  if (payload.isActive !== undefined) body.isActive = payload.isActive;
  const updated = await apiFetch<WarehouseApi>(`/warehouses/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return mapWarehouseApiToUi(updated);
}
