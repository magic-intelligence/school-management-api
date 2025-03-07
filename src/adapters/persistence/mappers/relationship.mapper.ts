import { RelationShipEntity } from "src/core/relationship/domain/entities/relationship.entity";
import { RelationshipSchema } from "../schemas";
import { plainToInstance } from "class-transformer";

export class RelationshipMapper {
    static toDomain(relationshipSchema?: RelationshipSchema): RelationShipEntity {
        return plainToInstance(RelationShipEntity, relationshipSchema);
    }

    static toPersistence(relationshipEntity?: RelationShipEntity): RelationshipSchema {
        return plainToInstance(RelationshipSchema, relationshipEntity);
    }
}