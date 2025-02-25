import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { STUDENT_REPOSITORY } from "./domain/repositories/student.repository";
import { StudentRepositoryImpl } from "src/adapters/persistence/repositories/student.repository.impl";
import { BasicInformationStudentUseCase } from "./application/use-cases/basic.information.student.use.case";
import { StudentController } from "src/adapters/http/controllers/student.controller";
import { StudentSchema } from "src/adapters/persistence/schemas/student.schema";
import { PersonModule } from "../person/person.module";
import { BasicInformationStudentFacade } from "./application/facades/basic.information.student.facade";
import { StudentFamilyModule } from "../student-family/student-family.module";


@Module({
    imports: [
        TypeOrmModule.forFeature([StudentSchema]),
        PersonModule,
        StudentFamilyModule
    ],
    providers:[
        {
            provide: STUDENT_REPOSITORY,
            useClass: StudentRepositoryImpl
        },
        BasicInformationStudentUseCase,
        BasicInformationStudentFacade
     ],
    controllers:[ StudentController ],
    exports:[]
})

export class StudentModule{}