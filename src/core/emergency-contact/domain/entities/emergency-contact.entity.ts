import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { BaseEntity } from "src/shared/types/entities/base.entity";

export class EmergencyContactEntity extends BaseEntity{
    studentFamilyId: string;
    priorityLevel: number;
    studentFamily: StudentFamilyEntity;
}