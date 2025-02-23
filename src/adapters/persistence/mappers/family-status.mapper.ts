import { FamilyStatusEntity } from "src/core/student/domain/entities/family-status.entity";
import { FamilyStatusSchema } from "../schemas/family-status.schema";

export class FamilyStatusMapper{
    static toDomain(familyStatusSchema: FamilyStatusSchema): FamilyStatusEntity{
        const familyStatusEntity = new FamilyStatusEntity();
        familyStatusEntity.id = familyStatusSchema.id;
        familyStatusEntity.name = familyStatusSchema.name;
        familyStatusEntity.description = familyStatusSchema.description;
        familyStatusEntity.isActive = familyStatusSchema.isActive;
        familyStatusEntity.createdAt = familyStatusSchema.createdAt;
        familyStatusEntity.updatedAt = familyStatusSchema.updatedAt;
        return familyStatusEntity;
    }

    static toPersistence(familyStatusEntity: FamilyStatusEntity): FamilyStatusSchema{
        const familyStatusSchema = new FamilyStatusSchema();
        familyStatusSchema.id = familyStatusEntity.id;
        familyStatusSchema.name = familyStatusEntity.name;
        familyStatusSchema.description = familyStatusEntity.description;
        familyStatusSchema.isActive = familyStatusEntity.isActive;
        familyStatusSchema.createdAt = familyStatusEntity.createdAt;
        familyStatusSchema.updatedAt = familyStatusEntity.updatedAt;
        return familyStatusSchema;
    }
}