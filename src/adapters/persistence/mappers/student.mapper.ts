import { plainToInstance } from "class-transformer";
import { StudentEntity } from "src/core/student/domain/entities/student.entity";
import { StudentSchema } from "../schemas";
import { FamilyStatusMapper } from "./family-status.mapper";
import { PersonMapper } from "./person.mapper";
import { StudentFamilyMapper } from "./student-family.mapper";
export class StudentMapper {
    static toDomain(studentSchema: StudentSchema): StudentEntity {
        const entity = plainToInstance(StudentEntity, studentSchema);
        entity.familyStatus = FamilyStatusMapper.toDomain(studentSchema.familyStatus);
        entity.person = PersonMapper.toDomain(studentSchema.person);

        entity.studentFamilies = studentSchema.studentFamilies
            ? studentSchema.studentFamilies.map((studentFamily) => StudentFamilyMapper.toDomain(studentFamily))
            : [];

        return entity;
    }

    static toPersistence(studentEntity: StudentEntity): StudentSchema {
        const schema = plainToInstance(StudentSchema, studentEntity);
        schema.familyStatus = FamilyStatusMapper.toPersistence(studentEntity.familyStatus);
        schema.person = PersonMapper.toPersistence(studentEntity.person);

        schema.studentFamilies = studentEntity.studentFamilies
            ? studentEntity.studentFamilies.map((studentFamily) => StudentFamilyMapper.toPersistence(studentFamily))
            : [];

        return schema;
    }

    static toDomainList(students: StudentSchema[]): StudentEntity[] {
        return students?.map((student) => this.toDomain(student));
    }

    static toPersistenceList(students: StudentEntity[]): StudentSchema[] {
        return students?.map((student) => this.toPersistence(student));
    }
}
