import { IsInt, IsNotEmpty, IsPositive, IsUUID } from "class-validator";

export class CreateEmergencyContactDTO{
    @IsUUID()
    @IsNotEmpty()
    studentFamilyId: string;
    @IsPositive()
    @IsInt()
    priorityLevel: number;
}