"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePermissionList = parsePermissionList;
exports.normalizePermissionsForCatalog = normalizePermissionsForCatalog;
exports.validatePermissionsAgainstCatalog = validatePermissionsAgainstCatalog;
const common_1 = require("@nestjs/common");
const client_permissions_catalog_1 = require("./client-permissions.catalog");
const CLIENT_PERMISSION_SET = new Set(client_permissions_catalog_1.CLIENT_PERMISSION_KEYS);
function parsePermissionList(input) {
    if (Array.isArray(input)) {
        return input.filter((item) => typeof item === 'string');
    }
    if (input && typeof input === 'object' && 'permissions' in input) {
        const nested = input.permissions;
        if (Array.isArray(nested)) {
            return nested.filter((item) => typeof item === 'string');
        }
    }
    return [];
}
function normalizePermissionsForCatalog(input) {
    const uniq = new Set(parsePermissionList(input));
    return Array.from(uniq).filter((permission) => CLIENT_PERMISSION_SET.has(permission));
}
function validatePermissionsAgainstCatalog(permissions) {
    const uniq = Array.from(new Set((permissions ?? []).map((p) => p.trim()).filter(Boolean)));
    const invalid = uniq.filter((permission) => !CLIENT_PERMISSION_SET.has(permission));
    if (invalid.length) {
        throw new common_1.BadRequestException(`Invalid permission keys: ${invalid.join(', ')}`);
    }
    return uniq;
}
//# sourceMappingURL=client-permissions.util.js.map