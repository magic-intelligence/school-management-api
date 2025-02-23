import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { StudentFamilySchema } from "../schemas/student-family.schema";
import { StudentMapper } from "./student.mapper";
import { ParentFamilyMapper } from "./parent-family.mapper";

export class StudentFamilyMapper{
    static toDomain(studentFamilySchema: StudentFamilySchema): StudentFamilyEntity{
        const studentFamilyEntity = new StudentFamilyEntity();
        studentFamilyEntity.id = studentFamilySchema.id;
        studentFamilyEntity.createdAt = studentFamilySchema.createdAt;
        studentFamilyEntity.updatedAt = studentFamilySchema.updatedAt;
        studentFamilyEntity.familier = ParentFamilyMapper.toDomain(studentFamilySchema.familier);
        studentFamilyEntity.student = StudentMapper.toDomain(studentFamilySchema.student);
        return studentFamilyEntity;
    }

    static toPersistence(studentFamilyEntity: StudentFamilyEntity): StudentFamilySchema{
        const studentFamilySchema = new StudentFamilySchema();
        studentFamilySchema.id = studentFamilyEntity.id;
        studentFamilySchema.createdAt = studentFamilyEntity.createdAt;
        studentFamilySchema.updatedAt = studentFamilyEntity.updatedAt;
        studentFamilySchema.familier = ParentFamilyMapper.toPersistence(studentFamilyEntity.familier);
        studentFamilySchema.student = StudentMapper.toPersistence(studentFamilyEntity.student);
        return studentFamilySchema;
    }

    static toDomainList(studentFamiliesSchema: StudentFamilySchema[]): StudentFamilyEntity[]{
        return studentFamiliesSchema?.map((studentFamilySchema) => this.toDomain(studentFamilySchema));
    }

    static toPersistenceList(studentFamiliesEntity: StudentFamilyEntity[]): StudentFamilySchema[]{
        return studentFamiliesEntity?.map((studentFamilyEntity) => this.toPersistence(studentFamilyEntity));
    }
}