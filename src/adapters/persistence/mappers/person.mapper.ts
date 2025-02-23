import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { PersonSchema } from "../schemas/person.schema";

export class PersonMapper{
    static toDomain(personEntity: PersonSchema ): PersonEntity {
        const personSchema = new PersonEntity();
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
        return personSchema;
    }

    static toPersistence(personEntity: PersonEntity ): PersonSchema {
        const personSchema = new PersonSchema;
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
        return personSchema;
    }
}