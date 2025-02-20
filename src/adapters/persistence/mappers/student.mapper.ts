import { Student } from "src/modules/student/domain/student";
import { StudentTypeormEntity } from "../entities/student.typeorm.entity";
import { PersonMapper } from "./person.mapper";

export class StudentMapper{
    static toDomain(typeormEntity: StudentTypeormEntity): Student{
        const student = new Student();
        student.id = typeormEntity.id;
        student.graceMinutes = typeormEntity.graceMinutes;
        student.enrollmentMount = typeormEntity.enrollmentMount;
        student.enrollmentDueDate = typeormEntity.enrollmentDueDate;
        student.monthlyMount = typeormEntity.monthlyMount;
        student.monthlyDueDate = typeormEntity.monthlyDueDate;
        student.materialMount = typeormEntity.materialMount;
        student.materialDueDate = typeormEntity.materialDueDate;
        student.entryTime = typeormEntity.entryTime;
        student.exitTime = typeormEntity.exitTime;
        student.brothersNumber = typeormEntity.brothersNumber;
        student.allergyDescription = typeormEntity.allergyDescription;
        student.familyStatus = typeormEntity.familyStatus;
        student.isActive = typeormEntity.isActive;
        student.createdAt = typeormEntity.createdAt;
        student.updatedAt = typeormEntity.updatedAt;
        // student.parentFamily = typeormEntity.parentFamily ? new ParentFamily(typeormEntity.parentFamily) : null;
        student.person = PersonMapper.toDomain(typeormEntity.person);
        // student.group = typeormEntity.group ? new Group(typeormEntity.group) : null;
        // student.service = typeormEntity.service ? new Service(typeormEntity.service) : null;
        return student;
    }

    static toPersistence(domainEntity: Student): StudentTypeormEntity{
        const typeormEntity = new StudentTypeormEntity();
        typeormEntity.id = domainEntity.id;
        typeormEntity.graceMinutes = domainEntity.graceMinutes;
        typeormEntity.enrollmentMount = domainEntity.enrollmentMount;
        typeormEntity.enrollmentDueDate = domainEntity.enrollmentDueDate;
        typeormEntity.monthlyMount = domainEntity.monthlyMount;
        typeormEntity.monthlyDueDate = domainEntity.monthlyDueDate;
        typeormEntity.materialMount = domainEntity.materialMount;
        typeormEntity.materialDueDate = domainEntity.materialDueDate;
        typeormEntity.entryTime = domainEntity.entryTime;
        typeormEntity.exitTime = domainEntity.exitTime;
        typeormEntity.brothersNumber = domainEntity.brothersNumber;
        typeormEntity.allergyDescription = domainEntity.allergyDescription;
        typeormEntity.familyStatus = domainEntity.familyStatus;
        typeormEntity.isActive = domainEntity.isActive;
        typeormEntity.createdAt = domainEntity.createdAt;
        typeormEntity.updatedAt = domainEntity.updatedAt;
        typeormEntity.person = PersonMapper.toPersistence(domainEntity.person);
        return typeormEntity;
    }
}