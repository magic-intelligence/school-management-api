import { Student } from "src/modules/student/domain/entities/student";
import { StudentSchema } from "../schemas/student.schema";
import { PersonMapper } from "./person.mapper";
import { StudentFamilyMapper } from "./student-family.mapper";

export class StudentMapper{
    static toDomain(studentSchema: StudentSchema): Student{
        const studentEntity = new Student();
        studentEntity.id = studentSchema.id;
        studentEntity.nickname = studentSchema.nickname;
        studentEntity.graceMinutes = studentSchema.graceMinutes;
        studentEntity.enrollmentMount = studentSchema.enrollmentMount;
        studentEntity.enrollmentDueDate = studentSchema.enrollmentDueDate;
        studentEntity.monthlyMount = studentSchema.monthlyMount;
        studentEntity.monthlyDueDate = studentSchema.monthlyDueDate;
        studentEntity.materialMount = studentSchema.materialMount;
        studentEntity.materialDueDate = studentSchema.materialDueDate;
        studentEntity.entryTime = studentSchema.entryTime;
        studentEntity.exitTime = studentSchema.exitTime;
        studentEntity.brothersNumber = studentSchema.brothersNumber;
        studentEntity.allergyDescription = studentSchema.allergyDescription;
        studentEntity.familyStatus = studentSchema.familyStatus;
        studentEntity.isActive = studentSchema.isActive;
        studentEntity.createdAt = studentSchema.createdAt;
        studentEntity.updatedAt = studentSchema.updatedAt;

        studentEntity.person = PersonMapper.toDomain(studentSchema.person);
        studentEntity.studentFamilies = StudentFamilyMapper.toDomainList(studentSchema.studentFamilies);
        return studentEntity;
    }



    static toPersistence(studentEntity: Student): StudentSchema{
        const studentSchema = new StudentSchema();
        studentSchema.id = studentEntity.id;
        studentSchema.nickname = studentEntity.nickname;
        studentSchema.graceMinutes = studentEntity.graceMinutes;
        studentSchema.enrollmentMount = studentEntity.enrollmentMount;
        studentSchema.enrollmentDueDate = studentEntity.enrollmentDueDate;
        studentSchema.monthlyMount = studentEntity.monthlyMount;
        studentSchema.monthlyDueDate = studentEntity.monthlyDueDate;
        studentSchema.materialMount = studentEntity.materialMount;
        studentSchema.materialDueDate = studentEntity.materialDueDate;
        studentSchema.entryTime = studentEntity.entryTime;
        studentSchema.exitTime = studentEntity.exitTime;
        studentSchema.brothersNumber = studentEntity.brothersNumber;
        studentSchema.allergyDescription = studentEntity.allergyDescription;
        studentSchema.familyStatus = studentEntity.familyStatus;
        studentSchema.isActive = studentEntity.isActive;
        studentSchema.createdAt = studentEntity.createdAt;
        studentSchema.updatedAt = studentEntity.updatedAt;
        studentSchema.person = PersonMapper.toPersistence(studentEntity.person);
        return studentSchema;
    }

    static toDomainList(typeormEntities: StudentSchema[]): Student[]{
            return typeormEntities?.map((studentSchema) => this.toDomain(studentSchema));
    }

    static toPersistenceList(domainEntities: Student[]): StudentSchema[]{
        return domainEntities?.map((studentEntity) => this.toPersistence(studentEntity));
    }
}