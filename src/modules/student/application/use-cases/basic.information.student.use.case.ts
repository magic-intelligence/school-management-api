import { Inject, Injectable } from "@nestjs/common";
import { STUDENT_REPOSITORY, StudentRepository } from "../../domain/student.repository";
import { Student } from "../../domain/student";
import { CreateStudentDTO } from "src/adapters/http/dtos/student/create.student.dto";

@Injectable()
export class BasicInformationStudentUseCase{
    constructor(
        @Inject(STUDENT_REPOSITORY)
        private readonly studentRepository: StudentRepository,
    ){}

    async execute (dto: CreateStudentDTO){

        const student = new Student(); 
        student.entryTime = dto.entryTime;
        student.exitTime = dto.exitTime;
        student.brothersNumber = dto.brothersNumber;
        student.familyStatus = dto.familyStatus;
        student.entryTime = dto.entryTime;
        student.person = dto.person;
        
        return this.studentRepository.save(student);
    }
}