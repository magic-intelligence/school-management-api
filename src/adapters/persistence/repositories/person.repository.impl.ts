import { BadRequestException, Injectable } from "@nestjs/common";
import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { PersonRepository } from "src/core/person/domain/repositories/person.repository";
import { Repository } from "typeorm";
import { PersonSchema } from "../schemas/person.schema";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonMapper } from "../mappers/person.mapper";
import { Transactional } from "src/infraestructure/database/typeorm/transactions/transactional.decorator";
import { handlerExceptionError } from "src/shared/exceptions/handler.exception.error";

@Injectable()
export class PersonRepositoryImpl implements PersonRepository{
    constructor(
        @InjectRepository(PersonSchema)
        private readonly personRepository: Repository<PersonSchema>,
        private readonly transactional: Transactional,
    ){}
    async save(person: PersonEntity): Promise<PersonEntity> {
        const manager = this.transactional.getManager();
        const repo = manager.getRepository(PersonSchema);
        try {

            const persisteEntity = PersonMapper.toPersistence(person);
            
            const savedEntity = await repo.save( persisteEntity );

            return PersonMapper.toDomain( savedEntity );
        } catch (error) {
            return handlerExceptionError(error);
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