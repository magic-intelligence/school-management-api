import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { StudentFamilySchema } from "./student-family.schema";
import { Column, JoinColumn, OneToOne, Entity as Schema } from "typeorm";

@Schema('emergency_contact')
export class EmergencyContactSchema extends BaseSchema{
    @Column({name: 'student_family_id', type: 'uuid', nullable: false, unique:false})
    studentFamilyId: string;
    @Column({name: 'priority_level', type: 'int', unique: true})
    priorityLevel: number;
    @OneToOne(()=> StudentFamilySchema)
    @JoinColumn({name: 'student_family_id'})
    studentFamily: StudentFamilySchema;
}