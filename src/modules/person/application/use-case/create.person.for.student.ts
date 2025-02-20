import { CreatePersonDTO } from "src/adapters/http/dtos/person/create.person.dto";
import { PERSON_REPOSITORY, PersonRepository } from "../../domain/person.repository";
import { Inject, Injectable } from "@nestjs/common";
import { Person } from "../../domain/person";

@Injectable()
export class CreatePersonForStudent{
    constructor(
        @Inject(PERSON_REPOSITORY)
        private readonly personRepository: PersonRepository,
    ){}

    excecute(dto: CreatePersonDTO){
        const person = new Person();
        person.name = dto.name;
        person.paternalSurname = dto.paternalSurname;
        person.maternalSurname = dto.maternalSurname;
        person.birthday = dto.birthday;
        person.gender = dto.gender;

        return this.personRepository.save( person )
    }
}