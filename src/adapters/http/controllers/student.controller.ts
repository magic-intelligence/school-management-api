import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { BasicInformationStudentDTO } from "../dtos/student/basic.information.student.dto";
import { BasicInformationStudentFacade } from "src/core/student/application/facades/basic.information.student.facade";
import { EmergencyContactUseCase } from "src/core/student/application/use-cases/emergency.contact.use.case";
import { CreateEmergencyContactDTO } from "../dtos/emergency-contact/create.emergency-contcat.dto";

@Controller('students')
export class StudentController{
    constructor(
        private readonly basicInformationStudentFacade: BasicInformationStudentFacade,
        private readonly emergencyContactUseCase: EmergencyContactUseCase,
    ){}

    @Post('basic-information')
    async register(@Body() dto: BasicInformationStudentDTO){
        return await this.basicInformationStudentFacade.saveStudent(dto);
    }
    @Post('emergency-contact')
    async registerEmergencyContact(@Body() dto: CreateEmergencyContactDTO){
        return await this.emergencyContactUseCase.save(dto);
    }

    @Get(':studentId/family')
    async findAll(@Param('studentId', ParseUUIDPipe) studentId: string){
        return this.emergencyContactUseCase.findFamilyByIdForStudent(studentId);
    }
}