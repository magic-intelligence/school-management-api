import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, PrimaryGeneratedColumn, Entity as Schema } from "typeorm";

@Schema({name: 'relationship'})
export class RelationshipSchema extends BaseSchema {
    @PrimaryGeneratedColumn('increment', {name: 'relationship_id', type: 'bigint'})
    relationshipId: string;
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'description', nullable: true})
    description: string;
}