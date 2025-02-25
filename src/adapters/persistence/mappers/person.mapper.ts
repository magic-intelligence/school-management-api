import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { PersonSchema } from "../schemas/person.schema";
import { BranchMapper } from "./branch.mapper";
import { AddressMapper } from "./address.mapper";
import { AddressEntity } from "src/core/address/domain/entities/address.entity";

export class PersonMapper{
    static toDomain(personSchema: PersonSchema ): PersonEntity {
        const personEntity = new PersonEntity();
        personEntity.id = personSchema.id;
        personEntity.name = personSchema.name;
        personEntity.paternalSurname = personSchema.paternalSurname;
        personEntity.maternalSurname = personSchema.maternalSurname;
        personEntity.phoneNumber = personSchema.phoneNumber;
        personEntity.gender = personSchema.gender;
        personEntity.birthday = personSchema.birthday;
        personEntity.isActive = personSchema.isActive;
        personEntity.createdAt = personSchema.createdAt;
        personEntity.updatedAt = personSchema.updatedAt;
        personEntity.branch = BranchMapper.toDomain(personSchema.branch)
        personEntity.address = personSchema.address;
        return personEntity;
    }

    static toPersistence(personEntity: PersonEntity ): PersonSchema {
        const personSchema = new PersonSchema();
        personSchema.id = personEntity.id;
        personSchema.name = personEntity.name;
        personSchema.paternalSurname = personEntity.paternalSurname;
        personSchema.maternalSurname = personEntity.maternalSurname;
        personSchema.phoneNumber = personEntity.phoneNumber;
        personSchema.gender = personEntity.gender;
        personSchema.birthday = personEntity.birthday;
        personSchema.isActive = personEntity.isActive;
        personSchema.createdAt = personEntity.createdAt;
        personSchema.updatedAt = personEntity.updatedAt;
        personSchema.branch = BranchMapper.toPersistence(personEntity.branch);
        personSchema.address = personEntity.address;
        return personSchema;
    }

    static toDomainList(persons: PersonSchema[]): PersonEntity[] {
        return persons?.map((person) => this.toDomain(person));
    }

    static toPersistenceList(persons: PersonEntity[]): PersonSchema[] {
        return persons?.map((person) => this.toPersistence(person));
    }   
}