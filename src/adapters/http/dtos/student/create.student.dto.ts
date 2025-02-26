import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MinLength, } from "class-validator";
import { PersonEntity } from "src/core/person/domain/entities/person.entity";

export class CreateStudentDTO {
    @IsString()
    @MinLength(1)
    @IsOptional()
    nickname?: string;
    
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'entryTime must be a valid time in HH:mm format' })
    @IsString()
    @IsNotEmpty()
    entryTime: string;
    
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'entryTime must be a valid time in HH:mm format' })
    @IsString()
    @IsNotEmpty()
    exitTime: string;

    @IsInt()
    @IsNotEmpty()
    brothersNumber: number;

    @IsString()
    @IsOptional()
    allergyDescription?: string;

    @IsNotEmpty()
    @IsUUID()
    familyStatusId: string;

    @IsOptional()
    @IsUUID()
    personId: string;
}