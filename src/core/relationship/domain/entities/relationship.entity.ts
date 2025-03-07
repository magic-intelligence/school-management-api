import { BaseEntity } from "src/shared/types/entities/base.entity";

export class RelationShipEntity extends BaseEntity {
    relationshipId: string;
    name: string;
    description: string;
}