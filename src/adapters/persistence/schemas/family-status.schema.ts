import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, PrimaryGeneratedColumn, Entity as Schema} from "typeorm";

@Schema('family_status')
export class FamilyStatusSchema extends BaseSchema{
    @PrimaryGeneratedColumn('increment', {name: 'family_status_id', type: 'bigint'})
    familyStatusId: string;
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'description', nullable: true})
    description?: string;
}