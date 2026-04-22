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
export declare const CLIENT_PERMISSION_CATALOG: ClientPermissionPanel[];
export declare const CLIENT_PERMISSION_KEYS: string[];
