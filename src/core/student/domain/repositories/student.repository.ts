import { GenericRepository } from "src/shared/repositories/generic.repository";
import { StudentEntity } from "../entities/student.entity";

export const STUDENT_REPOSITORY = 'STUDENT_REPOSITORY';

export interface StudentRepository extends GenericRepository<StudentEntity> {

}