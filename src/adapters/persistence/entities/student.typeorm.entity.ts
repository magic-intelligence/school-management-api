// import { Group } from "src/modules/group/domain/group.entity";
// import { ParentFamily } from "src/modules/parent-family/domain/parent-family.entity";
// import { Person } from "src/modules/person/domain/person.entity";
// import { Service } from "src/modules/service/domain/service.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

import { BaseTypeOrmEntity } from "../../../infraestructure/database/typeorm/base/base.typeorm.entity";
import { FamilyStatus } from "src/modules/student/domain/enums/family.status";
import { PersonTypeormEntity } from "./person.typeorm.entity";
import { StudentFamily } from "src/modules/student-family/domain/student-family";
import { StudentFamilyTypeormEntity } from "./student-family.typeorm.entity";

@Entity({name: 'student'})
export class StudentTypeormEntity extends BaseTypeOrmEntity{
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
    allergyDescription: string;
    @Column({name: 'family_status', type: 'enum', enum: FamilyStatus, enumName: 'family_status_enum'})
    familyStatus: FamilyStatus;

    @OneToMany(()=> StudentFamilyTypeormEntity, (studentFamily)=> studentFamily.student)
    studentFamilies: StudentFamilyTypeormEntity[];

    @OneToOne(()=> PersonTypeormEntity)
    @JoinColumn({name: 'person_id'})
    person: PersonTypeormEntity;

    // @OneToOne(()=> Group,{nullable: true})
    // @JoinColumn({name: 'group_id'})
    // group?: Group;

    // @OneToOne(()=> Service, {nullable: true})
    // @JoinColumn({name: 'service_id'})
    // service?: Service;
}