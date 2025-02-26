import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Entity as Schema, JoinColumn, ManyToOne, Column } from "typeorm";
import { StudentSchema } from "./student.schema";
import { ParentFamilySchema } from "./parent-family.schema";

@Schema({name: 'student_family'})
export class StudentFamilySchema extends BaseSchema{
    @Column({name: 'student_id', type: 'uuid', nullable: false})
    studentId: string;
    @Column({name: 'parent_family_id', type: 'uuid', nullable: false})
    parentFamilyId: string;
    @ManyToOne(()=> StudentSchema)
    @JoinColumn({name: 'student_id'})
    student: StudentSchema;
    @ManyToOne(()=> ParentFamilySchema)
    @JoinColumn({name: 'parent_family_id'})
    parentFamily: ParentFamilySchema;
}