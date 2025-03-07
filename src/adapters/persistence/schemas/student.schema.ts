import { Column, Entity as Schema, JoinColumn, OneToMany, OneToOne, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseSchema } from "../../../infraestructure/database/typeorm/base/base.schema";
import { StudentFamilySchema } from "./student-family.schema";
import { FamilyStatusSchema } from "./family-status.schema";
import { PersonGender } from "src/shared/value-object/person.gender";
import { BranchSchema } from "./branch.schema";

@Schema({name: 'student'})
export class StudentSchema extends BaseSchema{
    @PrimaryGeneratedColumn('increment', {name: 'student_id', type: 'bigint'})
    studentId: string;
    @Column({name: 'family_status_id', type: 'bigint', nullable: false})
    familyStatusId: string;
    @Column({name: 'branch_id', type: 'bigint', nullable: false})
    branchId: string;
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'paternal_surname', nullable: false})
    paternalSurname: string;
    @Column({name: 'maternal_surname', nullable: false})
    maternalSurname: string;
    @Column({name: 'nickname', type: 'varchar', nullable: true})
    nickname?: string;
    @Column({name: 'birthday', type: 'date', nullable: true})
    birthday?: Date;
    @Column({name: 'gender', type: 'enum', enum: PersonGender, nullable: false})
    gender: PersonGender;
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
   
    @ManyToOne(()=> BranchSchema, (branch)=> branch.students)
    @JoinColumn({name: 'branch_id'})
    branch: BranchSchema;
    @OneToOne(()=> FamilyStatusSchema)
    @JoinColumn({name: 'family_status_id'})
    familyStatus: FamilyStatusSchema;
    @OneToMany(()=> StudentFamilySchema, (studentFamily)=> studentFamily.student)
    studentFamilies?: StudentFamilySchema[];

}