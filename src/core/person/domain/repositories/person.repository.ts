import { GenericRepository } from "src/shared/repositories/generic.repository";
import { PersonEntity } from "../entities/person.entity";

export const PERSON_REPOSITORY = 'PERSON_REPOSITORY'; 

export interface PersonRepository extends GenericRepository<PersonEntity>{

}