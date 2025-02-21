import { BaseTypeOrmEntity } from "src/infraestructure/database/typeorm/base/base.typeorm.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'relationship'})
export class RelationShipTypeormEntity extends BaseTypeOrmEntity {
    @Column({name: 'name', nullable: false})
    name: string;
    @Column({name: 'description', nullable: true})
    description: string;
}