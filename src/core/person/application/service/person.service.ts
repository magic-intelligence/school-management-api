import { CreatePersonDTO } from "src/adapters/http/dtos/person/create.person.dto";
import { PERSON_REPOSITORY, PersonRepository } from "../../domain/repositories/person.repository";
import { Inject, Injectable } from "@nestjs/common";
import { PersonEntity } from "../../domain/entities/person.entity";
import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";

@Injectable()
export class PersonService{
    constructor(
        @Inject(PERSON_REPOSITORY)
        private readonly personRepository: PersonRepository,
    ){}

    excecute(dto: CreatePersonDTO){
        const branch = new BranchEntity();
        branch.id = dto.branchId;

        const person = new PersonEntity();
        person.name = dto.name;
        person.paternalSurname = dto.paternalSurname;
        person.maternalSurname = dto.maternalSurname;
        person.birthday = dto.birthday;
        person.gender = dto.gender;
        person.branch = branch;

        return this.personRepository.save( person )
    }
}