import { BaseDomain } from "src/shared/types/base/base.domain";
import { FamilyStatus } from "./enums/family.status";
import { Person } from "src/modules/person/domain/person";

export class Student extends BaseDomain{
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
    allergyDescription: string;
    familyStatus: FamilyStatus;
    person: Person;
}