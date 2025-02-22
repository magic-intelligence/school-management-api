import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Entity as Schema, JoinColumn, ManyToOne } from "typeorm";
import { StudentSchema } from "./student.schema";
import { FamilierSchema } from "./familier.schema";

@Schema({name: 'student_family'})
export class StudentFamilySchema extends BaseSchema{
    @ManyToOne(()=> StudentSchema)
    @JoinColumn({name: 'student_id'})
    student: StudentSchema;
    @ManyToOne(()=> FamilierSchema)
    @JoinColumn({name: 'familier_id'})
    familier: FamilierSchema;
}