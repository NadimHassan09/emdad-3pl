export interface ClientPermissionFeature {
  key: string;
  label: string;
  permissions: string[];
}

export interface ClientPermissionPanel {
  key: string;
  label: string;
  features: ClientPermissionFeature[];
}

/**
 * Fixed permission catalog for client accounts in admin master-data.
 * Keep keys stable so stored permissions remain valid over time.
 */
export const CLIENT_PERMISSION_CATALOG: ClientPermissionPanel[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    features: [
      { key: 'overview', label: 'Overview', permissions: ['dashboard:view'] },
      { key: 'kpi', label: 'KPI', permissions: ['dashboard:kpi:view'] },
    ],
  },
  {
    key: 'inbound',
    label: 'Inbound',
    features: [
      { key: 'orders', label: 'Inbound Orders', permissions: ['inbound:view', 'inbound:manage'] },
      { key: 'receiving', label: 'Receiving', permissions: ['inbound:receive'] },
    ],
  },
  {
    key: 'inventory',
    label: 'Inventory',
    features: [
      { key: 'stock', label: 'Current Stock', permissions: ['inventory:view'] },
      { key: 'adjustments', label: 'Adjustments', permissions: ['inventory:adjust'] },
      { key: 'movements', label: 'Movements', permissions: ['inventory:movements:view'] },
    ],
  },
  {
    key: 'outbound',
    label: 'Outbound',
    features: [
      { key: 'orders', label: 'Outbound Orders', permissions: ['outbound:view', 'outbound:manage'] },
      { key: 'shipments', label: 'Shipments', permissions: ['outbound:ship'] },
    ],
  },
  {
    key: 'master_data',
    label: 'Master Data',
    features: [
      { key: 'products', label: 'Products', permissions: ['products:view', 'products:manage'] },
      { key: 'warehouses', label: 'Warehouses', permissions: ['warehouses:view'] },
    ],
  },
  {
    key: 'settings',
    label: 'Settings',
    features: [
      { key: 'team', label: 'Team Accounts', permissions: ['team:accounts:view', 'team:accounts:manage'] },
      { key: 'profile', label: 'Client Profile', permissions: ['client:profile:view', 'client:profile:manage'] },
    ],
  },
];

export const CLIENT_PERMISSION_KEYS = Array.from(
  new Set(
    CLIENT_PERMISSION_CATALOG.flatMap((panel) =>
      panel.features.flatMap((feature) => feature.permissions),
    ),
  ),
);
