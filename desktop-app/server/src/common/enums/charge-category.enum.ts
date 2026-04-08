/** Charge category for invoice lines and billing transactions; matches schema charge_category. */
export enum ChargeCategory {
  STORAGE = 'STORAGE',
  MOVEMENT = 'MOVEMENT',
  VAS = 'VAS',
  PLAN_FEE = 'PLAN_FEE',
  MANUAL_CREDIT = 'MANUAL_CREDIT',
  MANUAL_CHARGE = 'MANUAL_CHARGE',
}
