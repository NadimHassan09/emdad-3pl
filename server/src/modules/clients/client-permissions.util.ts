import { BadRequestException } from '@nestjs/common';
import { CLIENT_PERMISSION_KEYS } from './client-permissions.catalog';

const CLIENT_PERMISSION_SET = new Set(CLIENT_PERMISSION_KEYS);

export function parsePermissionList(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.filter((item): item is string => typeof item === 'string');
  }
  if (input && typeof input === 'object' && 'permissions' in input) {
    const nested = (input as { permissions?: unknown }).permissions;
    if (Array.isArray(nested)) {
      return nested.filter((item): item is string => typeof item === 'string');
    }
  }
  return [];
}

export function normalizePermissionsForCatalog(input: unknown): string[] {
  const uniq = new Set(parsePermissionList(input));
  return Array.from(uniq).filter((permission) => CLIENT_PERMISSION_SET.has(permission));
}

export function validatePermissionsAgainstCatalog(permissions?: string[]): string[] {
  const uniq = Array.from(new Set((permissions ?? []).map((p) => p.trim()).filter(Boolean)));
  const invalid = uniq.filter((permission) => !CLIENT_PERMISSION_SET.has(permission));
  if (invalid.length) {
    throw new BadRequestException(
      `Invalid permission keys: ${invalid.join(', ')}`,
    );
  }
  return uniq;
}
