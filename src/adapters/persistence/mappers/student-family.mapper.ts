import { StudentFamily } from "src/modules/student-family/domain/student-family";
import { StudentFamilyTypeormEntity } from "../entities/student-family.typeorm.entity";
import { StudentMapper } from "./student.mapper";
import { FamilierMapper } from "./familier.mapper";

export class StudentFamilyMapper{
    static toDomain(typeormEntity: StudentFamilyTypeormEntity): StudentFamily{
        const studentFamily = new StudentFamily();
        studentFamily.id = typeormEntity.id;
        studentFamily.createdAt = typeormEntity.createdAt;
        studentFamily.updatedAt = typeormEntity.updatedAt;
        studentFamily.familier = FamilierMapper.toDomain(typeormEntity.familier);
        studentFamily.student = StudentMapper.toDomain(typeormEntity.student);
        return studentFamily;
    }

    static toPersistence(domainEntity: StudentFamily): StudentFamilyTypeormEntity{
        const typeormEntity = new StudentFamilyTypeormEntity();
        typeormEntity.id = domainEntity.id;
        typeormEntity.createdAt = domainEntity.createdAt;
        typeormEntity.updatedAt = domainEntity.updatedAt;
        typeormEntity.familier = FamilierMapper.toPersistence(domainEntity.familier);
        typeormEntity.student = StudentMapper.toPersistence(domainEntity.student);
        return typeormEntity;
    }

    static toDomainList(typeormEntities: StudentFamilyTypeormEntity[]): StudentFamily[]{
        return typeormEntities?.map((typeormEntity) => this.toDomain(typeormEntity));
    }

    static toPersistenceList(domainEntities: StudentFamily[]): StudentFamilyTypeormEntity[]{
        return domainEntities?.map((domainEntity) => this.toPersistence(domainEntity));
    }
}