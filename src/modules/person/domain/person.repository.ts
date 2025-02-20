import { Person } from "./person";

export const PERSON_REPOSITORY = 'PERSON_REPOSITORY'; 

export interface PersonRepository{
    save(person: Person): Promise<Person>;
    findAll(): Promise<Person[]>;
    findById(id: string): Promise<Person>;
    delete(id: string):Promise<void>;
}