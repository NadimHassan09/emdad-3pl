import { ClientStatus } from '../../../common/enums/client-status.enum';
export declare class CreateClientDto {
    code: string;
    name: string;
    contactEmail?: string;
    contactPhone?: string;
    addressLine1?: string;
    city?: string;
    stateRegion?: string;
    postalCode?: string;
    countryCode?: string;
    status?: ClientStatus;
    isActive?: boolean;
    currency?: string;
}
