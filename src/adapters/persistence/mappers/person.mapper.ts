import { Person } from "src/modules/person/domain/person";
import { PersonSchema } from "../schemas/person.schema";

export class PersonMapper{
    static toDomain(typeormEntity: PersonSchema ): Person {
        const person = new Person();
        person.id = typeormEntity.id;
        person.name = typeormEntity.name;
        person.paternalSurname = typeormEntity.paternalSurname;
        person.maternalSurname = typeormEntity.maternalSurname;
        person.phoneNumber = typeormEntity.phoneNumber;
        person.gender = typeormEntity.gender;
        person.birthday = typeormEntity.birthday;
        person.isActive = typeormEntity.isActive;
        person.createdAt = typeormEntity.createdAt;
        person.updatedAt = typeormEntity.updatedAt;
        return person;
    }

    static toPersistence(domainEntity: Person ): PersonSchema {
        const typeormEntity = new PersonSchema;
        typeormEntity.id = domainEntity.id;
        typeormEntity.name = domainEntity.name;
        typeormEntity.paternalSurname = domainEntity.paternalSurname;
        typeormEntity.maternalSurname = domainEntity.maternalSurname;
        typeormEntity.phoneNumber = domainEntity.phoneNumber;
        typeormEntity.gender = domainEntity.gender;
        typeormEntity.birthday = domainEntity.birthday;
        typeormEntity.isActive = domainEntity.isActive;
        typeormEntity.createdAt = domainEntity.createdAt;
        typeormEntity.updatedAt = domainEntity.updatedAt;
        return typeormEntity;
    }
}