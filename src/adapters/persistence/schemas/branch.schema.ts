import { BaseSchema } from "src/infraestructure/database/typeorm/base/base.schema";
import { Column, Entity as Schema, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { AddressSchema } from "./address.schema";
import { PersonSchema } from "./person.schema";

@Schema({name: 'branch'})
export class BranchSchema extends BaseSchema{
    @Column({name: 'address_id', type: 'uuid', nullable: false})
    addressId: string;
    @Column({name: 'name', nullable: false})
    name: string;
    @OneToOne( ()=> AddressSchema )
    @JoinColumn({name: 'address_id'})
    address: AddressSchema;

    @OneToMany(()=> PersonSchema, (person)=> person.branchId)
    persons: PersonSchema[];
}