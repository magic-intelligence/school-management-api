import { PersonService } from "src/core/person/application/service/person.service";
import { BasicInformationStudentUseCase } from "../use-cases/basic.information.student.use.case";
import { BasicInformationStudentDTO } from "src/adapters/http/dtos/student/basic.information.student.dto";
import { StudentEntity } from "../../domain/entities/student.entity";
import { Inject, Logger } from "@nestjs/common";
import { StudentFamilyService } from "src/core/student-family/application/service/student-family.service";
import { TRANSACTION_PORT, TransactionPort } from "src/shared/ports/transaction.port";

export class BasicInformationStudentFacade {
    logger = new Logger('BasicInformationFacade');
    constructor(
        @Inject()
        private readonly personService: PersonService,
        @Inject()
        private readonly studentFamilyService: StudentFamilyService,
        @Inject()
        private readonly basicInformationStudentUseCase: BasicInformationStudentUseCase,
        @Inject(TRANSACTION_PORT)
        private readonly transaction: TransactionPort,
    ){}

    async saveStudent(dto: BasicInformationStudentDTO): Promise<StudentEntity>{
        return this.transaction.run<StudentEntity>(async ()=>{
            const person = await this.personService.save({
                name: dto.name,
                paternalSurname: dto.paternalSurname,
                maternalSurname: dto.maternalSurname,
                gender: dto.gender,
                birthday: dto.birthday,
                phoneNumber: dto.phoneNumber,
                branchId: dto.branchId,
                addressId: dto.addressId
            });
            this.logger.log(person);
            const student = await this.basicInformationStudentUseCase.execute({
                nickname: dto.nickname,
                entryTime: dto.entryTime,
                exitTime: dto.entryTime,
                brothersNumber: dto.brothersNumber,
                familyStatusId: dto.familyStatusId,
                allergyDescription: dto.allergyDescription,
                personId: person.id
            });
            this.logger.log(student);
    
            const studentFamily = await this.studentFamilyService.save({
                parentFamilyId: dto.parentFamilyId,
                studentId: student.id
            });
            this.logger.log(studentFamily);
            return student;
        });
    }
}