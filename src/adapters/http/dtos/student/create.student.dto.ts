import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MinLength, } from "class-validator";
import { FamilyStatus } from "../../../../core/student/domain/enums/family.status";
import { Person } from "src/core/person/domain/entities/person.entity";

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

    @IsEnum(FamilyStatus)
    @IsNotEmpty()
    familyStatus: FamilyStatus;

    @IsUUID()
    @IsOptional()
    person: Person;
}