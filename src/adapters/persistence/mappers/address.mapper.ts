import { AddressEntity } from "src/core/address/domain/entities/address.entity";
import { AddressSchema } from "../schemas";

export class AddressMapper {
    static toDomain(addressSchema: AddressSchema): AddressEntity {
        const addressEntity = new AddressEntity();
        addressEntity.id = addressSchema.id;
        addressEntity.street = addressSchema.street; 
        addressEntity.interiorNumber = addressSchema.interiorNumber; 
        addressEntity.exteriorNumber = addressSchema.exteriorNumber; 
        addressEntity.district = addressSchema.district; 
        addressEntity.city = addressSchema.city; 
        addressEntity.postalCode = addressSchema.postalCode; 
        addressEntity.state = addressSchema.state; 
        addressEntity.isActive = addressSchema.isActive; 
        addressEntity.createdAt = addressSchema.createdAt; 
        addressEntity.updatedAt = addressSchema.updatedAt;
        return addressEntity; 
    }

    static toPersistence(addressEntity: AddressEntity): AddressSchema {
        const addressSchema = new AddressSchema();
        addressSchema.id = addressEntity.id; 
        addressSchema.street = addressEntity.street; 
        addressSchema.interiorNumber = addressEntity.interiorNumber; 
        addressSchema.exteriorNumber = addressEntity.exteriorNumber; 
        addressSchema.district = addressEntity.district; 
        addressSchema.city = addressEntity.city; 
        addressSchema.postalCode = addressEntity.postalCode; 
        addressSchema.state = addressEntity.state; 
        addressSchema.isActive = addressEntity.isActive; 
        addressSchema.createdAt = addressEntity.createdAt; 
        addressSchema.updatedAt = addressEntity.updatedAt;
        return addressSchema; 
    }
}