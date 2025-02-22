import { BaseDomain } from "src/shared/types/base/base.domain";
import { FamilyStatus } from "../enums/family.status";
import { Person } from "src/modules/person/domain/person";
import { StudentFamily } from "src/modules/student-family/domain/student-family";

export class Student extends BaseDomain{
    nickname?: string;
    graceMinutes?: number;
    enrollmentMount?: number;
    enrollmentDueDate?: Date;
    monthlyMount?: number;
    monthlyDueDate?: Date;
    materialMount?: number;
    materialDueDate?: Date;
    entryTime: string;
    exitTime: string;
    brothersNumber: number;
    allergyDescription?: string;
    familyStatus: FamilyStatus;
    person: Person;
    studentFamilies: StudentFamily[];
}