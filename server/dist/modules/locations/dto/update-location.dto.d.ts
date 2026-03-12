import { LocationType } from '../../../common/enums/location-type.enum';
export declare class UpdateLocationDto {
    code?: string;
    locationType?: LocationType;
    parentLocationId?: string;
    capacityValue?: number;
    capacityUomId?: string;
    isActive?: boolean;
}
