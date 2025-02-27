import { CreatePersonDTO } from "src/adapters/http/dtos/person/create.person.dto";
import { PERSON_REPOSITORY, PersonRepository } from "../../domain/repositories/person.repository";
import { Inject, Injectable } from "@nestjs/common";
import { PersonEntity } from "../../domain/entities/person.entity";

@Injectable()
export class PersonService{
    constructor(
        @Inject(PERSON_REPOSITORY)
        private readonly personRepository: PersonRepository,
    ){}

    save(dto: CreatePersonDTO){

        const person = new PersonEntity();
        person.name = dto.name;
        person.paternalSurname = dto.paternalSurname;
        person.maternalSurname = dto.maternalSurname;
        person.birthday = dto.birthday;
        person.gender = dto.gender;
        person.branchId = dto.branchId;
        person.addressId = dto.addressId;

        return this.personRepository.save( person )
    }
}