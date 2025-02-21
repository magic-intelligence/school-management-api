import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonTypeormRepository } from "src/adapters/persistence/repositories/person.typeorm.repository";
import { PersonTypeormEntity } from "src/adapters/persistence/entities/person.typeorm.entity";
import { PERSON_REPOSITORY } from "./domain/person.repository";
import { PersonService } from "./application/service/person.service";

@Module({
    imports: [TypeOrmModule.forFeature([PersonTypeormEntity])],
    providers:[
        {
            provide: PERSON_REPOSITORY,
            useClass: PersonTypeormRepository
        },
        PersonService
     ],
    exports:[ 
        PERSON_REPOSITORY,
        PersonService
    ]
})

export class PersonModule{}