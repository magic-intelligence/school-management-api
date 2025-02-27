import { AddressEntity } from "src/core/address/domain/entities/address.entity";
import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { BaseEntity } from "src/shared/types/entities/base.entity";

export class BranchEntity extends BaseEntity{
    addressId: string;
    name: string;
    address: AddressEntity;
    persons?: PersonEntity[];
}