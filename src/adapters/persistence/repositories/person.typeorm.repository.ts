import { BadRequestException, Injectable } from "@nestjs/common";
import { Person } from "src/modules/person/domain/person";
import { PersonRepository } from "src/modules/person/domain/person.repository";
import { Repository } from "typeorm";
import { PersonTypeormEntity } from "../entities/person.typeorm.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonMapper } from "../mappers/person.mapper";

@Injectable()
export class PersonTypeormRepository implements PersonRepository{
    constructor(
        @InjectRepository(PersonTypeormEntity)
        private readonly personRepository: Repository<PersonTypeormEntity>
    ){}
    async save(person: Person): Promise<Person> {
        try {
            const persisteEntity = PersonMapper.toPersistence(person);

            const savedEntity = await this.personRepository.save( persisteEntity );

            return PersonMapper.toDomain( savedEntity );
        } catch (error) {
            console.error(error)
            throw new BadRequestException(error.detail);
        }
    }
    findAll(): Promise<Person[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Person> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}