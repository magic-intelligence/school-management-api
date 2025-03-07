import { AddressEntity } from "src/core/address/domain/entities/address.entity";
import { AddressSchema } from "../schemas";
import { plainToInstance } from "class-transformer";

export class AddressMapper {
    static toDomain(addressSchema?: AddressSchema): AddressEntity {
        return plainToInstance(AddressEntity, addressSchema);
    }

    static toPersistence(addressEntity?: AddressEntity): AddressSchema {
        return plainToInstance(AddressSchema, addressEntity);
    }
}