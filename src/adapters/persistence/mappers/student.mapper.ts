import { StudentEntity } from "src/core/student/domain/entities/student.entity";
import { StudentSchema } from "../schemas/student.schema";
import { PersonMapper } from "./person.mapper";
import { StudentFamilyMapper } from "./student-family.mapper";
import { FamilyStatusMapper } from "./family-status.mapper";

export class StudentMapper{
    static toDomain(studentSchema: StudentSchema): StudentEntity{
        const studentEntity = new StudentEntity();
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
        studentEntity.isActive = studentSchema.isActive;
        studentEntity.createdAt = studentSchema.createdAt;
        studentEntity.updatedAt = studentSchema.updatedAt;
        
        studentEntity.familyStatus = FamilyStatusMapper.toDomain(studentSchema.familyStatus);
        studentEntity.person = PersonMapper.toDomain(studentSchema.person);
        studentEntity.studentFamilies = StudentFamilyMapper.toDomainList(studentSchema.studentFamilies || []);
        return studentEntity;
    }



    static toPersistence(studentEntity: StudentEntity): StudentSchema{
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
        studentSchema.isActive = studentEntity.isActive;
        studentSchema.createdAt = studentEntity.createdAt;
        studentSchema.updatedAt = studentEntity.updatedAt;
        
        studentSchema.familyStatus = FamilyStatusMapper.toPersistence(studentEntity.familyStatus);
        studentSchema.person = PersonMapper.toPersistence(studentEntity.person);
        studentSchema.studentFamilies = StudentFamilyMapper.toPersistenceList(studentEntity.studentFamilies || [])
        return studentSchema;
    }

    static toDomainList(typeormEntities: StudentSchema[]): StudentEntity[]{
            return typeormEntities?.map((studentSchema) => this.toDomain(studentSchema));
    }

    static toPersistenceList(domainEntities: StudentEntity[]): StudentSchema[]{
        return domainEntities?.map((studentEntity) => this.toPersistence(studentEntity));
    }
}