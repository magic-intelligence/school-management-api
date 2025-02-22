import { PersonService } from "src/modules/person/application/service/person.service";
import { BasicInformationStudentUseCase } from "../use-cases/basic.information.student.use.case";
import { BasicInformationStudentDTO } from "src/adapters/http/dtos/student/basic.information.student.dto";
import { Student } from "../../domain/entities/student";
import { Inject } from "@nestjs/common";

export class BasicInformationStudentFacade {
    constructor(
        @Inject()
        private readonly personService: PersonService,
        @Inject()
        private readonly basicInformationStudentUseCase: BasicInformationStudentUseCase,
    ){}

    async saveStudent(dto: BasicInformationStudentDTO): Promise<Student>{
        const person = await this.personService.excecute({
            name: dto.name,
            paternalSurname: dto.paternalSurname,
            maternalSurname: dto.maternalSurname,
            gender: dto.gender,
            birthday: dto.birthday,
            phoneNumber: dto.phoneNumber
        });

        const student = await this.basicInformationStudentUseCase.execute({
            nickname: dto.nickname,
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