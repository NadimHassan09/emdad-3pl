import { UomDimension } from '../../../common/enums/uom-dimension.enum';
export declare class UpdateUomDto {
    code?: string;
    name?: string;
    dimension?: UomDimension;
    baseConversion?: number;
    isActive?: boolean;
}
