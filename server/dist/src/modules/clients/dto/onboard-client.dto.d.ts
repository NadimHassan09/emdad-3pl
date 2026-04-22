import { ClientStatus } from '../../../common/enums/client-status.enum';
declare class OnboardClientAccountInputDto {
    firstName: string;
    lastName: string;
    email: string;
    clientRoleId: string;
}
export declare class OnboardClientDto {
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
    accounts?: OnboardClientAccountInputDto[];
}
export {};
