import { IsDate, IsEnum, IsISO8601, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { PersonGender } from "src/modules/person/domain/enums/person.gender";

export class CreatePersonDTO{
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
}