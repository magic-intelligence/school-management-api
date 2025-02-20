import { Student } from "./student";

export const STUDENT_REPOSITORY = 'STUDENT_REPOSITORY';

export interface StudentRepository{
    save(student: Student): Promise<Student>;
    findAll(): Promise<Student[]>;
    findById(id: string): Promise<Student>;
    delete(id: string):Promise<void>;
}