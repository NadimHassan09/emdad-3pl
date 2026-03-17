import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsString()
  referenceType?: string;

  /**
   * Reference ID linking to the source document (e.g., order ID, adjustment ID).
   */
  @IsOptional()
  @IsUUID()
  referenceId?: string;
}

  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { MovementType } from '../../../common/enums/movement-type.enum';
import { Type } from 'class-transformer';

/**
 * DTO for creating inventory ledger entries.
 * This is the safe contract for stock-changing operations.
 *
 * IMPORTANT: Never write directly to current_stock. This DTO is used to insert
 * into inventory_ledger, which triggers automatic current_stock updates via DB trigger.
 */
export class CreateLedgerEntryDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  warehouseId: string;

  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  @IsEnum(MovementType)
  movementType: MovementType;

  /**
   * Quantity change (positive for increases, negative for decreases).
   * Example: +10 for receipt, -5 for shipment.
   */
  @IsNumber()
  @Type(() => Number)
  qtyChange: number;

  /**
   * Reference type for traceability (e.g., 'INBOUND_ORDER', 'OUTBOUND_ORDER', 'ADJUSTMENT').
   */
  @IsOptional()
  @IsS