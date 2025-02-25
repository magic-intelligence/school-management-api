import { STUDENT_FAMILY_REPOSITORY, StudentFamilyRepository } from "../../domain/repositories/student-family.repository";
import { Inject } from "@nestjs/common";
import { CreateStudentFamilyDTO } from "src/adapters/http/dtos/student-family/create.student-family.dto";
import { StudentFamilyEntity } from "../../domain/entities/student-family.entity";

export class StudentFamilyService {
    constructor(
        @Inject(STUDENT_FAMILY_REPOSITORY)
        private readonly studentFamilyRepository: StudentFamilyRepository,
    ) {}

    async save(dto: CreateStudentFamilyDTO): Promise<StudentFamilyEntity> {

        const studentFamily = new StudentFamilyEntity();
        studentFamily.parentFamily = dto.parentFamily;
        studentFamily.student = dto.student;
        
        return await this.studentFamilyRepository.save( studentFamily);
    }
}