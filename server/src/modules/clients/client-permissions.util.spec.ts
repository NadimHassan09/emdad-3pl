import {
  normalizePermissionsForCatalog,
  validatePermissionsAgainstCatalog,
} from './client-permissions.util';

describe('client-permissions util', () => {
  it('keeps only catalog permissions when normalizing', () => {
    const normalized = normalizePermissionsForCatalog({
      permissions: ['dashboard:view', 'unknown:permission', 'inventory:view'],
    });
    expect(normalized).toEqual(['dashboard:view', 'inventory:view']);
  });

  it('throws when validating unknown permission keys', () => {
    expect(() =>
      validatePermissionsAgainstCatalog(['dashboard:view', 'not:allowed']),
    ).toThrow();
  });

  it('deduplicates valid permission keys', () => {
    const validated = validatePermissionsAgainstCatalog([
      'dashboard:view',
      'dashboard:view',
      'inventory:view',
    ]);
    expect(validated).toEqual(['dashboard:view', 'inventory:view']);
  });
});
