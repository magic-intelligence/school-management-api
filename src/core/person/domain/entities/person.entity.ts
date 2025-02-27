import { BaseEntity } from "src/shared/types/entities/base.entity";
import { PersonGender } from "../../../../shared/value-object/person.gender";
import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";
import { AddressEntity } from "src/core/address/domain/entities/address.entity";

export class PersonEntity extends BaseEntity{
        branchId: string;
        addressId?: string;
        name: string;
        paternalSurname: string;
        maternalSurname: string;
        birthday?: Date;
        phoneNumber?: string;
        gender: PersonGender;
        branch: BranchEntity;
        address?: AddressEntity | null;
}