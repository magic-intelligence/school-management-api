import { validate } from "class-validator";
import { CreatePersonDTO } from "src/adapters/http/dtos/person/create.person.dto";
import { PersonGender } from "src/shared/value-object/person.gender";

describe('Pruebas a CreatePersonDTO {create.person.dto.ts}', ()=>{
    const dto = new CreatePersonDTO();
    dto.name = 'Edwin';
    dto.paternalSurname = 'Garcia';
    dto.maternalSurname = 'Quiterio';
    dto.gender = PersonGender.MALE;
    dto.phoneNumber = '7411073337';
    dto.addressId = 'f426125e-f186-4123-ae7c-f40adcb3b3b6';
    dto.branchId = 'f426125e-f186-4123-ae7c-f40adcb3b3b6';

    test('Verificacion de el dto de person', async()=>{
        const dtoValidate = await validate(dto);
        expect(dtoValidate.length).toBe(0);
    });
});