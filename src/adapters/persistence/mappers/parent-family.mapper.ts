import { ParentFamilyEntity } from "src/core/parent-family/domain/entities/parent-family.entity";
import { ParentFamilySchema } from "../schemas/parent-family.schema";

export class ParentFamilyMapper {
    static toDomain(parentFamilySchema: ParentFamilySchema): ParentFamilyEntity {
        const parentFamilyEntity = new ParentFamilyEntity();
        parentFamilyEntity.id = parentFamilySchema.id;
        parentFamilyEntity.personId = parentFamilySchema.personId;
        parentFamilyEntity.person = parentFamilySchema.person;
        parentFamilyEntity.relationshipId = parentFamilySchema.relationshipId;
        parentFamilyEntity.relationship = parentFamilySchema.relationship;
        parentFamilyEntity.createdAt = parentFamilySchema.createdAt;
        parentFamilyEntity.updatedAt = parentFamilySchema.updatedAt;
        parentFamilyEntity.isActive = parentFamilySchema.isActive;
        return parentFamilyEntity;
    }

    static toPersistence(parentFamilyEntity: ParentFamilyEntity): ParentFamilySchema {
        const parentFamilySchema = new ParentFamilySchema();
        parentFamilySchema.id = parentFamilyEntity.id;
        parentFamilySchema.personId = parentFamilyEntity.personId;
        parentFamilySchema.person = parentFamilyEntity.person;
        parentFamilySchema.relationshipId = parentFamilyEntity.relationshipId;
        parentFamilySchema.relationship = parentFamilyEntity.relationship;
        parentFamilySchema.createdAt = parentFamilyEntity.createdAt;
        parentFamilySchema.updatedAt = parentFamilyEntity.updatedAt;
        parentFamilySchema.isActive = parentFamilyEntity.isActive;
        return parentFamilySchema;
    }
}