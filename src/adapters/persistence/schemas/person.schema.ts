import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { PersonGender } from "src/modules/person/domain/enums/person.gender";
import { Column, Entity as Schema } from "typeorm";

@Schema({name: 'person'})
export class PersonSchema extends BaseSchema {
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'paternal_surname', nullable: false})
    paternalSurname: string;
    @Column({name: 'maternal_surname', nullable: false})
    maternalSurname: string;
    @Column({name: 'birthday', type: 'timestamp', nullable: true})
    birthday?: Date;
    @Column({name: 'phone_number', type: 'varchar', length: 20, nullable: true, unique: true})
    phoneNumber?: string;
    @Column({name: 'gender', type: 'enum', enum: PersonGender, nullable: false})
    gender: PersonGender;
}