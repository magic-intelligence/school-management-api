import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { StudentFamilyRepository } from "src/core/student-family/domain/repositories/student-family.repository";
import { Repository } from "typeorm";
import { StudentFamilySchema } from "../schemas";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentFamilyMapper } from "../mappers/student-family.mapper";
import { BadRequestException } from "@nestjs/common";
import { Transactional } from "src/infraestructure/database/typeorm/transactions/transactional.decorator";
import { handlerExceptionError } from "src/shared/exceptions/handler.exception.error";

export class StudentFamilyRepositoryImpl implements StudentFamilyRepository{
    constructor(
        @InjectRepository(StudentFamilySchema)
        private readonly studentRepository: Repository<StudentFamilySchema>,
        private readonly transactional: Transactional,
    ){}
    async save(student: StudentFamilyEntity): Promise<StudentFamilyEntity> {
        const manager = this.transactional.getManager();
        const repo = manager.getRepository(StudentFamilySchema);
        try{
            const studentSchema = StudentFamilyMapper.toPersistence(student);
            const savedStudentFamily = await repo.save(studentSchema);
            return StudentFamilyMapper.toDomain(savedStudentFamily);
        } catch (error) {
            return handlerExceptionError(error);
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