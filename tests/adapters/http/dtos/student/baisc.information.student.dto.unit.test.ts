import { validate } from "class-validator";
import { BasicInformationStudentDTO } from "../../../../../src/adapters/http/dtos/student/basic.information.student.dto";
import { PersonGender } from "../../../../../src/shared/value-object/person.gender";

describe('Validación del BasicInformationStudentDTO{basic.information.dto.ts}', ()=>{
    const dto = new BasicInformationStudentDTO();
    dto.nickname = 'Drawin';
    dto.name = 'Edwin';
    dto.paternalSurname = 'Garcia';
    dto.maternalSurname = 'Quiterio';
    dto.entryTime = '07:00';
    dto.exitTime = '13:30';
    dto.brothersNumber = 3;
    dto.gender = PersonGender.MALE;
    dto.familyStatusId = '45a7fc8b-f96e-4a22-be0d-0c74fde0ad3e';
    dto.parentFamilyId = '45a7fc8b-f96e-4a22-be0d-0c74fde0ad3e';
    dto.branchId = '45a7fc8b-f96e-4a22-be0d-0c74fde0ad3e';

    it('Validacion de los datos', async() => {
        const dtoValidate = await validate(dto);
        expect(dtoValidate.length).toBe(0); 
    });
});