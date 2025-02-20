import { Body, Controller, Get, Post } from "@nestjs/common";
import { BasicInformationStudentDTO } from "../dtos/student/basic.information.student.dto";
import { BasicInformationStudentFacade } from "src/modules/student/application/facades/basic.information.student.facade";

@Controller('students')
export class StudentController{
    constructor(
        private readonly basicInformationStudentFacade: BasicInformationStudentFacade,
    ){}

    @Post('basic-information')
    async register(@Body() dto: BasicInformationStudentDTO){
        return await this.basicInformationStudentFacade.saveStudent(dto);
    }

    @Get()
    async findAll(){
        return 'Endpoint correcto { FindAll }'
    }
}