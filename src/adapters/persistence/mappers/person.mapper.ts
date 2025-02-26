import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { PersonSchema } from "../schemas";
import { plainToInstance } from "class-transformer";
import { BranchMapper } from "./branch.mapper";
import { AddressMapper } from "./address.mapper";

export class PersonMapper{
    // static toDomain(personSchema: PersonSchema ): PersonEntity {
    //     const entity = plainToInstance(PersonEntity, personSchema);
    //     return entity;
    // }

    // static toPersistence(personEntity: PersonEntity ): PersonSchema {
    //     const schema = plainToInstance(PersonSchema, personEntity);
    //     return schema;
    // }

    static toDomain(personSchema: PersonSchema ): PersonEntity {
        const entity = plainToInstance(PersonEntity, personSchema)
        
        if(personSchema === undefined) return entity;
        
        entity.branch = BranchMapper.toDomain(personSchema.branch);
        entity.address = personSchema.address ? AddressMapper.toDomain( personSchema.address) : null;
        return entity;
    }

    static toPersistence(personEntity: PersonEntity ): PersonSchema {
        const schema = plainToInstance(PersonSchema, personEntity);

        if(personEntity === undefined) return schema;
        
        schema.branch = BranchMapper.toPersistence(personEntity.branch);
        schema.address = personEntity.address ? AddressMapper.toPersistence(personEntity.address) : null;
        return schema;
    }
    
    static toDomainList(persons: PersonSchema[] | undefined): PersonEntity[] {
        return !!persons ?  persons?.map( this.toDomain ): [];
    }

    static toPersistenceList(persons: PersonEntity[] | undefined): PersonSchema[] {
        return !!persons ? persons?.map( this.toPersistence ): [];
    }   
}