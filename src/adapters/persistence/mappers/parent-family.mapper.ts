import { ParentFamilyEntity } from "src/core/parent-family/domain/entities/parent-family.entity";
import { ParentFamilySchema } from "../schemas/parent-family.schema";

export class ParentFamilyMapper {
    static toDomain(parentFamilySchema: ParentFamilySchema): ParentFamilyEntity {
        const parentFamilyEntity = new ParentFamilyEntity();
        parentFamilyEntity.id = parentFamilySchema.id;
        parentFamilyEntity.person = parentFamilySchema.person;
        parentFamilyEntity.relationship = parentFamilySchema.relationship;
        parentFamilyEntity.createdAt = parentFamilySchema.createdAt;
        parentFamilyEntity.updatedAt = parentFamilySchema.updatedAt;
        parentFamilyEntity.isActive = parentFamilySchema.isActive;
        return parentFamilyEntity;
    }

    static toPersistence(parentFamilyEntity: ParentFamilyEntity): ParentFamilySchema {
        const parentFamilySchema = new ParentFamilySchema();
        parentFamilySchema.id = parentFamilyEntity.id;
        parentFamilySchema.person = parentFamilyEntity.person;
        parentFamilySchema.relationship = parentFamilyEntity.relationship;
        parentFamilySchema.createdAt = parentFamilyEntity.createdAt;
        parentFamilySchema.updatedAt = parentFamilyEntity.updatedAt;
        parentFamilySchema.isActive = parentFamilyEntity.isActive;
        return parentFamilySchema;
    }
}