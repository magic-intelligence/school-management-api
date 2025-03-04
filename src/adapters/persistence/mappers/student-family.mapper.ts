import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { StudentFamilySchema } from "../schemas/student-family.schema";
import { StudentMapper } from "./student.mapper";
import { ParentFamilyMapper } from "./parent-family.mapper";
import { plainToInstance } from "class-transformer";

export class StudentFamilyMapper{
    static toDomain(studentFamilySchema: StudentFamilySchema | null): StudentFamilyEntity {
        const studentFamilyEntity = plainToInstance(StudentFamilyEntity, studentFamilySchema);

        if(studentFamilySchema === undefined || studentFamilySchema === null) return studentFamilyEntity;

        studentFamilyEntity.parentFamily = ParentFamilyMapper.toDomain(studentFamilySchema.parentFamily);
        studentFamilyEntity.student = StudentMapper.toDomain(studentFamilySchema.student)

        return studentFamilyEntity;
    }

    static toPersistence(studentFamilyEntity: StudentFamilyEntity | null): StudentFamilySchema {
        const studentFamilySchema = plainToInstance(StudentFamilySchema, studentFamilyEntity);

        if(studentFamilyEntity === undefined || studentFamilyEntity === null) return studentFamilySchema;

        studentFamilySchema.parentFamily = ParentFamilyMapper.toPersistence(studentFamilyEntity.parentFamily);
        studentFamilySchema.student = StudentMapper.toPersistence(studentFamilyEntity.student)

        return studentFamilySchema;
    }

    static toDomainList(studentFamiliesSchema: StudentFamilySchema[]): StudentFamilyEntity[] | undefined{
        if(studentFamiliesSchema === undefined || studentFamiliesSchema === null)
            return undefined;
        return studentFamiliesSchema?.map((studentFamilySchema) => this.toDomain(studentFamilySchema));
    }

    static toPersistenceList(studentFamiliesEntity: StudentFamilyEntity[]): StudentFamilySchema[]{
        return studentFamiliesEntity?.map((studentFamilyEntity) => this.toPersistence(studentFamilyEntity));
    }
}