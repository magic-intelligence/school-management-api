import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";
import { BranchSchema } from "../schemas";
import { PersonMapper } from "./person.mapper";
import { AddressMapper } from "./address.mapper";
import { plainToInstance } from "class-transformer";

export class BranchMapper{
    static toDomain(branchSchema: BranchSchema): BranchEntity {

        const branchEntity = plainToInstance(BranchEntity, branchSchema);

        if(branchSchema === undefined) return branchEntity;

        branchEntity.persons = PersonMapper.toDomainList(branchSchema.persons);
        branchEntity.address = AddressMapper.toDomain(branchSchema.address);
        return branchEntity;
    }
    
    static toPersistence(branchEntity: BranchEntity): BranchSchema {
        const branchSchema = plainToInstance(BranchSchema, branchEntity);

        if(branchEntity === undefined ) return branchSchema;

        branchSchema.persons = PersonMapper?.toPersistenceList(branchEntity.persons);
        branchSchema.address = AddressMapper?.toPersistence(branchEntity.address);
        return branchSchema;
    }
    
}   