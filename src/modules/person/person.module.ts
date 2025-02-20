import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonTypeormRepository } from "src/adapters/persistence/repositories/person.typeorm.repository";
import { PersonTypeormEntity } from "src/adapters/persistence/entities/person.typeorm.entity";
import { PERSON_REPOSITORY } from "./domain/person.repository";
import { CreatePersonForStudent } from "./application/use-case/create.person.for.student";

@Module({
    imports: [TypeOrmModule.forFeature([PersonTypeormEntity])],
    providers:[
        {
            provide: PERSON_REPOSITORY,
            useClass: PersonTypeormRepository
        },
        CreatePersonForStudent
     ],
    exports:[ 
        PERSON_REPOSITORY,
        CreatePersonForStudent
    ]
})

export class PersonModule{}