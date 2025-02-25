import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, Entity as Schema } from "typeorm";

@Schema({name: 'address'})
export class AddressSchema extends BaseSchema{
    @Column({name: 'postal_code', type: 'int', nullable: false})
    postalCode: number;
    @Column({name: 'street', type: 'text', nullable: false})
    street: string;
    @Column({name: 'interior_number', type: 'varchar', length: 10, nullable: true})
    interiorNumber: string;
    @Column({name: 'exterior_number', type: 'varchar', length: 10, nullable: true})
    exteriorNumber: string;
    @Column({name: 'district', type: 'text', nullable: false})
    district: string;
    @Column({name: 'city', type: 'text', nullable: false})
    city: string;
    @Column({name: 'state', type: 'varchar', length: 100})
    state: string;
}