import {
  IsUUID,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}

  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  IsString,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiveBatchDto {
  @IsUUID()
  @IsOptional()
  batchId?: string;

  @IsUUID()
  @IsOptional()
  locationId?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0.0001)
  qtyReceived: number;

  // Optional batch creation fields
  @IsOptional()
  @IsString()
  batchCode?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @IsString()
  supplierBatchCode?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsDateString()
  manufacturingDate?: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;
}

export class ReceiveInboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  itemId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiveBatchDto)
  batches: ReceiveBatchDto[];
}
