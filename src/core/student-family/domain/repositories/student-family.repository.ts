import { GenericRepository } from "src/shared/repositories/generic.repository";
import { StudentFamilyEntity } from "../entities/student-family.entity";

export const STUDENT_FAMILY_REPOSITORY = 'STUDENT_FAMILY_REPOSITORY';

export interface StudentFamilyRepository extends GenericRepository<StudentFamilyEntity>{

}