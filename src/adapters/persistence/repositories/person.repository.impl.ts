import { BadRequestException, Injectable } from "@nestjs/common";
import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { PersonRepository } from "src/core/person/domain/repositories/person.repository";
import { Repository } from "typeorm";
import { PersonSchema } from "../schemas/person.schema";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonMapper } from "../mappers/person.mapper";

@Injectable()
export class PersonRepositoryImpl implements PersonRepository{
    constructor(
        @InjectRepository(PersonSchema)
        private readonly personRepository: Repository<PersonSchema>
    ){}
    async save(person: PersonEntity): Promise<PersonEntity> {
        try {

            const persisteEntity = PersonMapper.toPersistence(person);
            // const persisteEntity = this.personRepository.create(person);
            
            const savedEntity = await this.personRepository.save( persisteEntity );

            return PersonMapper.toDomain( savedEntity );
        } catch (error) {
            console.error(error)
            throw new BadRequestException(error.detail);
        }
    }
    findAll(): Promise<PersonEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<PersonEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}