import { BaseEntity } from "src/shared/types/entities/base.entity";

export class AddressEntity extends BaseEntity{
    postalCode: number;
    street: string;
    interiorNumber: string;
    exteriorNumber: string;
    district: string;
    city: string;
    state: string;
}