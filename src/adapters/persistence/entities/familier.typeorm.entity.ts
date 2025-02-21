import { BaseTypeOrmEntity } from "src/infraestructure/database/typeorm/base/base.typeorm.entity";
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { PersonTypeormEntity } from "./person.typeorm.entity";
import { RelationShipTypeormEntity } from "./relationship.typeorm.entity";
import { StudentFamilyTypeormEntity } from "./student-family.typeorm.entity";

@Entity({name: 'familier'})
export class FamilierTypeormEntity extends BaseTypeOrmEntity{
    @OneToOne(()=> PersonTypeormEntity)
    @JoinColumn({name: 'person_id'})
    person: PersonTypeormEntity;

    @OneToOne(()=> RelationShipTypeormEntity)
    @JoinColumn({name: 'relationship_id'})
    relationship: RelationShipTypeormEntity;

    @OneToMany(()=> StudentFamilyTypeormEntity, (studentFamily)=> studentFamily.familier)
    studentFamily: StudentFamilyTypeormEntity[];
}