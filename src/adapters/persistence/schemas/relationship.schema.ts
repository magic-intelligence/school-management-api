import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, Entity as Schema } from "typeorm";

@Schema({name: 'relationship'})
export class RelationshipSchema extends BaseSchema {
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'description', nullable: true})
    description: string;
}