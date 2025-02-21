import { Familier } from "src/modules/familier/domain/familier";
import { FamilierTypeormEntity } from "../entities/familier.typeorm.entity";

export class FamilierMapper {
    static toDomain(typeormEntity: FamilierTypeormEntity): Familier {
        const familier = new Familier();
        familier.id = typeormEntity.id;
        familier.person = typeormEntity.person;
        familier.relationship = typeormEntity.relationship;
        familier.createdAt = typeormEntity.createdAt;
        familier.updatedAt = typeormEntity.updatedAt;
        familier.isActive = typeormEntity.isActive;
        return familier;
    }

    static toPersistence(domainEntity: Familier): FamilierTypeormEntity {
        const typeormEntity = new FamilierTypeormEntity();
        typeormEntity.id = domainEntity.id;
        typeormEntity.person = domainEntity.person;
        typeormEntity.relationship = domainEntity.relationship;
        typeormEntity.createdAt = domainEntity.createdAt;
        typeormEntity.updatedAt = domainEntity.updatedAt;
        typeormEntity.isActive = domainEntity.isActive;
        return typeormEntity;
    }
}