import { BaseDomain } from "src/shared/types/base/base.domain";
import { PersonGender } from "./enums/person.gender";

export class Person extends BaseDomain{
        name: string;
        paternalSurname: string;
        maternalSurname: string;
        birthday?: Date;
        phoneNumber?: string;
        gender: PersonGender;
}