import { BaseEntity } from "src/shared/types/base/base.entity";
import { PersonGender } from "../../../../shared/value-object/person.gender";

export class PersonEntity extends BaseEntity{
        name: string;
        paternalSurname: string;
        maternalSurname: string;
        birthday?: Date;
        phoneNumber?: string;
        gender: PersonGender;
}