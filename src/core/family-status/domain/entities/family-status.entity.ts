import { BaseEntity } from "src/shared/types/entities/base.entity";

export class FamilyStatusEntity extends BaseEntity{
    name: string;
    description?: string;
}