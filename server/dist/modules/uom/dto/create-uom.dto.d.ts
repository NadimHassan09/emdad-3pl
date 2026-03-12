import { UomDimension } from '../../../common/enums/uom-dimension.enum';
export declare class CreateUomDto {
    code: string;
    name: string;
    dimension: UomDimension;
    baseConversion?: number;
    isActive?: boolean;
}
