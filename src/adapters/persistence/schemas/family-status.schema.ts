import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, Entity as Schema} from "typeorm";

@Schema('status_family')
export class FamilyStatusSchema extends BaseSchema{
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'description', nullable: true})
    description?: string;
}