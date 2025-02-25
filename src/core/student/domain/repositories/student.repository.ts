import { StudentEntity } from "../entities/student.entity";

export const STUDENT_REPOSITORY = 'STUDENT_REPOSITORY';

export interface StudentRepository{
    save(student: StudentEntity): Promise<StudentEntity>;
    findAll(): Promise<StudentEntity[]>;
    findById(id: string): Promise<StudentEntity>;
    delete(id: string):Promise<void>;
}