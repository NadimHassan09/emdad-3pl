/** Batch lifecycle status; matches schema batch_status. */
export enum BatchStatus {
  AVAILABLE = 'AVAILABLE',
  HOLD = 'HOLD',
  QUARANTINE = 'QUARANTINE',
  EXPIRED = 'EXPIRED',
  CONSUMED = 'CONSUMED',
}
