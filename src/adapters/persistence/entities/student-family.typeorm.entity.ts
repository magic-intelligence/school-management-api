import { BaseTypeOrmEntity } from "src/infraestructure/database/typeorm/base/base.typeorm.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { StudentTypeormEntity } from "./student.typeorm.entity";
import { FamilierTypeormEntity } from "./familier.typeorm.entity";

@Entity({name: 'student_family'})
export class StudentFamilyTypeormEntity extends BaseTypeOrmEntity{
    @ManyToOne(()=> StudentTypeormEntity)
    @JoinColumn({name: 'student_id'})
    student: StudentTypeormEntity;
    @ManyToOne(()=> FamilierTypeormEntity)
    @JoinColumn({name: 'familier_id'})
    familier: FamilierTypeormEntity;
}