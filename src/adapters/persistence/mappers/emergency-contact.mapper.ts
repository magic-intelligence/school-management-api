import { EmergencyContactEntity } from "src/core/emergency-contact/domain/entities/emergency-contact.entity";
import { EmergencyContactSchema } from "../schemas/emergency-contact.schema";
import { plainToInstance } from "class-transformer";

export class EmergencyContactMapper{
    static toDomain(emergencyContactSchema: EmergencyContactSchema): EmergencyContactEntity{
        return plainToInstance(EmergencyContactEntity, emergencyContactSchema);
    }

    static toPersistence(emergencyContactEntity: EmergencyContactEntity): EmergencyContactSchema{
        return plainToInstance(EmergencyContactSchema, emergencyContactEntity);
    }
}