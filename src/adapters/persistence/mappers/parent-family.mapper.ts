import { ParentFamilyEntity } from "src/core/parent-family/domain/entities/parent-family.entity";
import { ParentFamilySchema } from "../schemas/parent-family.schema";
import { plainToInstance } from "class-transformer";
import { PersonMapper } from "./person.mapper";
import { RelationshipMapper } from "./relationship.mapper";

export class ParentFamilyMapper {
    static toDomain(parentFamilySchema: ParentFamilySchema): ParentFamilyEntity {
        const parentFamilyEntity = plainToInstance(ParentFamilyEntity, parentFamilySchema);
        
        if( parentFamilySchema === undefined ) return parentFamilyEntity;
        
        parentFamilyEntity.person = PersonMapper.toDomain(parentFamilySchema.person);
        parentFamilyEntity.relationship = RelationshipMapper.toDomain(parentFamilySchema.relationship);
        return parentFamilyEntity;
    }

    static toPersistence(parentFamilyEntity: ParentFamilyEntity): ParentFamilySchema {
        const parentFamilySchema = plainToInstance(ParentFamilySchema, parentFamilyEntity);
        
        if( parentFamilyEntity === undefined ) return parentFamilySchema;

        parentFamilySchema.person = PersonMapper.toPersistence(parentFamilyEntity.person);
        parentFamilySchema.relationship = RelationshipMapper.toPersistence(parentFamilyEntity.relationship);
        return parentFamilySchema;
    }
}