import { PersonEntity } from "../entities/person.entity";

export const PERSON_REPOSITORY = 'PERSON_REPOSITORY'; 

export interface PersonRepository{
    save(person: PersonEntity): Promise<PersonEntity>;
    findAll(): Promise<PersonEntity[]>;
    findById(id: string): Promise<PersonEntity>;
    delete(id: string):Promise<void>;
}