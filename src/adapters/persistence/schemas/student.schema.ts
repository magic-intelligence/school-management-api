import { Column, Entity as Schema, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseSchema } from "../../../infraestructure/database/typeorm/base/base.schema";
import { PersonSchema } from "./person.schema";
import { StudentFamilySchema } from "./student-family.schema";
import { FamilyStatusSchema } from "./family-status.schema";

@Schema({name: 'student'})
export class StudentSchema extends BaseSchema{
    @Column({name: 'nickname', type: 'varchar', nullable: true})
    nickname?: string;
    @Column({name: 'grace_minutes', type: 'int', nullable: true})
    graceMinutes?: number;
    @Column({name: 'enrollment_mount', type: 'double precision', nullable: true})
    enrollmentMount?: number;
    @Column({name: 'enrollment_due_date', type: 'timestamp', nullable: true})
    enrollmentDueDate?: Date;
    @Column({name: 'monthly_mount', type: 'double precision', nullable: true})
    monthlyMount?: number;
    @Column({name: 'monthly_due_date', type: 'timestamp', nullable: true})
    monthlyDueDate?: Date;
    @Column({name: 'material_mount', type: 'double precision', nullable: true})
    materialMount?: number;
    @Column({name: 'material_due_date', type: 'timestamp', nullable: true})
    materialDueDate?: Date;
    @Column({name: 'entry_time', type: 'time', nullable: false})
    entryTime?: string;
    @Column({name: 'exit_time', type: 'time', nullable: false})
    exitTime?: string;
    @Column({name: 'brothers_number', type: 'int', nullable: false})
    brothersNumber?: number;
    @Column({name: 'allergy_description', type: 'text', nullable: true})
    allergyDescription?: string;
   
    @OneToOne(()=> FamilyStatusSchema)
    @JoinColumn({name: 'family_status_id'})
    familyStatus: FamilyStatusSchema;

    @OneToMany(()=> StudentFamilySchema, (studentFamily)=> studentFamily.student)
    studentFamilies: StudentFamilySchema[];

    @OneToOne(()=> PersonSchema)
    @JoinColumn({name: 'person_id'})
    person: PersonSchema;
}