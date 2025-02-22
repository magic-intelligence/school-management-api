import { Familier } from "src/modules/familier/domain/familier";
import { Student } from "src/modules/student/domain/entities/student";
import { BaseDomain } from "src/shared/types/base/base.domain";

export class StudentFamily extends BaseDomain{
    familier: Familier;
    student: Student;
}