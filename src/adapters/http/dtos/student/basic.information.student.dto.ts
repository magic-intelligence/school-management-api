import { IsEnum, IsInt, IsISO8601, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MinLength } from "class-validator";
import { PersonGender } from "src/shared/value-object/person.gender";

export class BasicInformationStudentDTO {
    @IsString()
    @MinLength(1)
    @IsOptional()
    nickname?: string;
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    name: string;
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    paternalSurname: string;
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    maternalSurname: string;
    @IsISO8601()
    @IsOptional()
    birthday?: Date;
    @IsOptional()
    @IsString()
    phoneNumber?: string;
    @IsEnum(PersonGender)
    @IsNotEmpty()
    gender: PersonGender;
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
    @IsNotEmpty()
    @IsUUID()
    branchId: string;
    @IsNotEmpty()
    @IsUUID()
    parentFamilyId: string;
}