import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Entity as Schema, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { PersonSchema } from "./person.schema";
import { RelationshipSchema } from "./relationship.schema";
import { StudentFamilySchema } from "./student-family.schema";

@Schema({name: 'parent_family'})
export class ParentFamilySchema extends BaseSchema{
    @OneToOne(()=> PersonSchema)
    @JoinColumn({name: 'person_id'})
    person?: PersonSchema;

    @OneToOne(()=> RelationshipSchema)
    @JoinColumn({name: 'relationship_id'})
    relationship?: RelationshipSchema;

    @OneToMany(()=> StudentFamilySchema, (studentFamily)=> studentFamily.familier)
    studentFamily?: StudentFamilySchema[];
}