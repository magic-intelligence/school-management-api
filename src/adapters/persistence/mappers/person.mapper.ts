import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { AddressSchema, BranchSchema, PersonSchema } from "../schemas";
import { plainToInstance } from "class-transformer";
import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";
import { AddressEntity } from "src/core/address/domain/entities/address.entity";
import { BranchMapper } from "./branch.mapper";
import { AddressMapper } from "./address.mapper";

export class PersonMapper{
    static toDomain(personSchema: PersonSchema ): PersonEntity {
        const entity = plainToInstance(PersonEntity, personSchema)
        entity.branch = BranchMapper.toDomain(personSchema.branch);
        entity.address = personSchema.address ? AddressMapper.toDomain( personSchema.address) : null;
        return entity;
    }

    static toPersistence(personEntity: PersonEntity ): PersonSchema {
        const schema = plainToInstance(PersonSchema, personEntity);
        schema.branch = BranchMapper.toPersistence(personEntity.branch);
        schema.address = personEntity.address ? AddressMapper.toPersistence(personEntity.address) : null;
        return schema;
    }

    static toDomainList(persons: PersonSchema[]): PersonEntity[] {
        return persons?.map((person) => this.toDomain(person));
    }

    static toPersistenceList(persons: PersonEntity[]): PersonSchema[] {
        return persons?.map((person) => this.toPersistence(person));
    }   
}