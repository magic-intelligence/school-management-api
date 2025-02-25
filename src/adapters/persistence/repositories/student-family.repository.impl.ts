import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { StudentFamilyRepository } from "src/core/student-family/domain/repositories/student-family.repository";
import { Repository } from "typeorm";
import { StudentFamilySchema, StudentSchema } from "../schemas";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentFamilyMapper } from "../mappers/student-family.mapper";
import { BadRequestException } from "@nestjs/common";

export class StudentFamilyRepositoryImpl implements StudentFamilyRepository{
    constructor(
        @InjectRepository(StudentFamilySchema)
        private readonly studentRepository: Repository<StudentFamilySchema>,
    ){}
    async save(student: StudentFamilyEntity): Promise<StudentFamilyEntity> {
        try {
            const studentSchema = StudentFamilyMapper.toPersistence(student);
            const savedStudentFamily = await this.studentRepository.save(studentSchema);
            return StudentFamilyMapper.toDomain(savedStudentFamily);
        } catch (error) {
            console.error(error)
            throw new BadRequestException(error.detail);
        }
    }
    findAll(): Promise<StudentFamilyEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<StudentFamilyEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}