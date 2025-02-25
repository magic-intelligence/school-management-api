import { PersonService } from "src/core/person/application/service/person.service";
import { BasicInformationStudentUseCase } from "../use-cases/basic.information.student.use.case";
import { BasicInformationStudentDTO } from "src/adapters/http/dtos/student/basic.information.student.dto";
import { StudentEntity } from "../../domain/entities/student.entity";
import { Inject } from "@nestjs/common";
import { StudentFamilyService } from "src/core/student-family/application/service/student-family.service";
import { ParentFamilyEntity } from "src/core/parent-family/domain/entities/parent-family.entity";

export class BasicInformationStudentFacade {
    constructor(
        @Inject()
        private readonly personService: PersonService,
        @Inject()
        private readonly studentFamilyService: StudentFamilyService,
        @Inject()
        private readonly basicInformationStudentUseCase: BasicInformationStudentUseCase,
    ){}

    async saveStudent(dto: BasicInformationStudentDTO): Promise<StudentEntity>{
        const person = await this.personService.excecute({
            name: dto.name,
            paternalSurname: dto.paternalSurname,
            maternalSurname: dto.maternalSurname,
            gender: dto.gender,
            birthday: dto.birthday,
            phoneNumber: dto.phoneNumber,
            branchId: dto.branchId
        });

        const student = await this.basicInformationStudentUseCase.execute({
            nickname: dto.nickname,
            entryTime: dto.entryTime,
            exitTime: dto.entryTime,
            brothersNumber: dto.brothersNumber,
            familyStatusId: dto.familyStatusId,
            allergyDescription: dto.allergyDescription,
            person,
        });

        const parentFamily = new ParentFamilyEntity();
        parentFamily.id = dto.parentFamilyId;

        await this.studentFamilyService.save({
            parentFamily: parentFamily,
            student
        });

        return student;
    }
}