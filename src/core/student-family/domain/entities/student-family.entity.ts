import { ParentFamilyEntity } from "src/core/parent-family/domain/entities/parent-family.entity";
import { StudentEntity } from "src/core/student/domain/entities/student.entity";
import { BaseEntity } from "src/shared/types/base/base.entity";

export class StudentFamilyEntity extends BaseEntity{
    studentId: string;
    parentFamilyId: string;
    parentFamily: ParentFamilyEntity;
    student: StudentEntity;
}