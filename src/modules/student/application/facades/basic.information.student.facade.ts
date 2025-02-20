import { CreatePersonForStudent } from "src/modules/person/application/use-case/create.person.for.student";
import { BasicInformationStudentUseCase } from "../use-cases/basic.information.student.use.case";
import { BasicInformationStudentDTO } from "src/adapters/http/dtos/student/basic.information.student.dto";
import { Student } from "../../domain/student";
import { Inject } from "@nestjs/common";

export class BasicInformationStudentFacade {
    constructor(
        @Inject()
        private readonly createPersonForStudent: CreatePersonForStudent,
        @Inject()
        private readonly basicInformationStudentUseCase: BasicInformationStudentUseCase,
    ){}

    async saveStudent(dto: BasicInformationStudentDTO): Promise<Student>{
        const person = await this.createPersonForStudent.excecute({
            name: dto.name,
            paternalSurname: dto.paternalSurname,
            maternalSurname: dto.maternalSurname,
            gender: dto.gender,
            birthday: dto.birthday,
            phoneNumber: dto.phoneNumber
        });

        const student = await this.basicInformationStudentUseCase.execute({
            entryTime: dto.entryTime,
            exitTime: dto.entryTime,
            brothersNumber: dto.brothersNumber,
            familyStatus: dto.familyStatus,
            allergyDescription: dto.allergyDescription,
            person
        });

        return student;
    }
}