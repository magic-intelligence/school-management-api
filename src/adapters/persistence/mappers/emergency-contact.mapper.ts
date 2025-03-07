import { EmergencyContactEntity } from "src/core/emergency-contact/domain/entities/emergency-contact.entity";
import { EmergencyContactSchema } from "../schemas/emergency-contact.schema";
import { plainToInstance } from "class-transformer";
import { StudentFamilyMapper } from "./student-family.mapper";

export class EmergencyContactMapper{
    static toDomain(emergencyContactSchema?: EmergencyContactSchema): EmergencyContactEntity{
        const emergencyContactEntity = plainToInstance(EmergencyContactEntity, emergencyContactSchema);
        
        if(!emergencyContactSchema) return emergencyContactEntity;

        emergencyContactEntity.studentFamily = StudentFamilyMapper.toDomain(emergencyContactSchema.studentFamily);
        return emergencyContactEntity;
    }

    static toPersistence(emergencyContactEntity?: EmergencyContactEntity): EmergencyContactSchema{
        const emergencyContactSchema = plainToInstance(EmergencyContactSchema, emergencyContactEntity);

        if( !emergencyContactEntity ) return emergencyContactSchema;

        emergencyContactSchema.studentFamily = StudentFamilyMapper.toPersistence(emergencyContactEntity.studentFamily);
        return emergencyContactSchema; 
    }
}