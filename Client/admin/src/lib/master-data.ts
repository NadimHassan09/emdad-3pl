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

export async function fetchUomList(): Promise<UomApi[]> {
  const list = await apiFetch<UomApi[]>('/uom');
  return Array.isArray(list) ? list : [];
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
