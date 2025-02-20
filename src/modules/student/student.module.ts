import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { STUDENT_REPOSITORY } from "./domain/student.repository";
import { StudentTypeOrmRepository } from "src/adapters/persistence/repositories/student.typeorm.repository";
import { BasicInformationStudentUseCase } from "./application/use-cases/basic.information.student.use.case";
import { StudentController } from "src/adapters/http/controllers/student.controller";
import { StudentTypeormEntity } from "src/adapters/persistence/entities/student.typeorm.entity";
import { PersonModule } from "../person/person.module";
import { BasicInformationStudentFacade } from "./application/facades/basic.information.student.facade";


@Module({
    imports: [
        TypeOrmModule.forFeature([StudentTypeormEntity]),
        PersonModule,
    ],
    providers:[
        {
            provide: STUDENT_REPOSITORY,
            useClass: StudentTypeOrmRepository
        },
        BasicInformationStudentUseCase,
        BasicInformationStudentFacade
     ],
    controllers:[ StudentController ],
    exports:[]
})

export class StudentModule{}