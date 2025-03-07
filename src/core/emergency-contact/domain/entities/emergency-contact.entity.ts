import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { BaseEntity } from "src/shared/types/entities/base.entity";

export class EmergencyContactEntity extends BaseEntity{
    emergencyContactId: string;
    studentFamilyId: string;
    priorityLevel: number;
    studentFamily: StudentFamilyEntity;
}