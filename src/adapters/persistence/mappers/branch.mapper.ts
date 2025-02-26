import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";
import { BranchSchema } from "../schemas";
import { PersonMapper } from "./person.mapper";
import { AddressMapper } from "./address.mapper";

export class BranchMapper{
    static toDomain(branchSchema: BranchSchema): BranchEntity{
        const branchEntity = new BranchEntity();
        branchEntity.id = branchSchema.id;
        branchEntity.addressId = branchSchema.addressId;
        branchEntity.name = branchSchema.name;
        branchEntity.isActive = branchSchema.isActive;
        branchEntity.createdAt = branchSchema.createdAt;
        branchEntity.updatedAt = branchSchema.updatedAt;
        branchEntity.persons = PersonMapper.toDomainList(branchSchema.persons);
        branchEntity.address = AddressMapper.toDomain(branchSchema.address);
        return branchEntity;
    }

    static toPersistence(branchEntity: BranchEntity): BranchSchema{
        const branchSchema = new BranchSchema();
        branchSchema.id = branchEntity.id;
        branchSchema.addressId = branchEntity.addressId;
        branchSchema.name = branchEntity.name;
        branchSchema.isActive = branchEntity.isActive;
        branchSchema.createdAt = branchEntity.createdAt;
        branchSchema.updatedAt = branchEntity.updatedAt;
        branchSchema.persons = PersonMapper.toPersistenceList(branchEntity.persons);
        branchSchema.address = AddressMapper.toPersistence(branchEntity.address);
        return branchSchema;
    }
}   