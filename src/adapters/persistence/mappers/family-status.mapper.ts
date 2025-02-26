import { FamilyStatusEntity } from "src/core/family-status/domain/entities/family-status.entity";
import { FamilyStatusSchema } from "../schemas";
import { plainToInstance } from "class-transformer";


export class FamilyStatusMapper{
    static toDomain(familyStatusSchema: FamilyStatusSchema): FamilyStatusEntity{
        const entity = plainToInstance(FamilyStatusEntity, familyStatusSchema);
        return entity;
    }

    static toPersistence(familyStatusEntity: FamilyStatusEntity): FamilyStatusSchema{
        const schema = plainToInstance(FamilyStatusSchema, familyStatusEntity);
        return schema;
    }
}