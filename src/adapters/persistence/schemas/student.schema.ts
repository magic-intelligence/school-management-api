import { Column, Entity as Schema, JoinColumn, OneToMany, OneToOne } from "typeorm";

import { BaseSchema } from "../../../infraestructure/database/typeorm/base/base.schema";
import { FamilyStatus } from "src/modules/student/domain/enums/family.status";
import { PersonSchema } from "./person.schema";
import { StudentFamilySchema } from "./student-family.schema";

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
    entryTime: string;
    @Column({name: 'exit_time', type: 'time', nullable: false})
    exitTime: string;
    @Column({name: 'brothers_number', type: 'int', nullable: false})
    brothersNumber: number;
    @Column({name: 'allergy_description', type: 'text', nullable: true})
    allergyDescription?: string;
    @Column({name: 'family_status', type: 'enum', enum: FamilyStatus, enumName: 'family_status_enum'})
    familyStatus: FamilyStatus;

    @OneToMany(()=> StudentFamilySchema, (studentFamily)=> studentFamily.student)
    studentFamilies: StudentFamilySchema[];

    @OneToOne(()=> PersonSchema)
    @JoinColumn({name: 'person_id'})
    person: PersonSchema;
}