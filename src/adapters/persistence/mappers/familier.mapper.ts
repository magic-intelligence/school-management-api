import { Familier } from "src/modules/familier/domain/familier";
import { FamilierSchema } from "../schemas/familier.schema";

export class FamilierMapper {
    static toDomain(typeormEntity: FamilierSchema): Familier {
        const familier = new Familier();
        familier.id = typeormEntity.id;
        familier.person = typeormEntity.person;
        familier.relationship = typeormEntity.relationship;
        familier.createdAt = typeormEntity.createdAt;
        familier.updatedAt = typeormEntity.updatedAt;
        familier.isActive = typeormEntity.isActive;
        return familier;
    }

    static toPersistence(domainEntity: Familier): FamilierSchema {
        const typeormEntity = new FamilierSchema();
        typeormEntity.id = domainEntity.id;
        typeormEntity.person = domainEntity.person;
        typeormEntity.relationship = domainEntity.relationship;
        typeormEntity.createdAt = domainEntity.createdAt;
        typeormEntity.updatedAt = domainEntity.updatedAt;
        typeormEntity.isActive = domainEntity.isActive;
        return typeormEntity;
    }
}