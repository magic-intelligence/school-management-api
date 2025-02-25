import { StudentFamilyEntity } from "../entities/student-family.entity";

export const STUDENT_FAMILY_REPOSITORY = 'STUDENT_FAMILY_REPOSITORY';

export interface StudentFamilyRepository{
    save(student: StudentFamilyEntity): Promise<StudentFamilyEntity>;
    findAll(): Promise<StudentFamilyEntity[]>;
    findById(id: string): Promise<StudentFamilyEntity>;
    delete(id: string):Promise<void>;
}