import { CreateAllocationDto } from './create-allocation.dto';
export declare class CreateReservationDto {
    outboundOrderId: string;
    allocations: CreateAllocationDto[];
}
