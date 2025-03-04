import { Inject, Injectable } from "@nestjs/common";
import { StudentFamilyPresenter } from "src/adapters/http/presenters/student-family/student-family.presenter";
import { StudentFamilyService } from "src/core/student-family/application/service/student-family.service";

@Injectable()
export class EmergencyContactUseCase{
    constructor(
        @Inject()
        private readonly studentFamilyService: StudentFamilyService,
    ){}

    // Retorna todos los familiares donde el id del estudiante sea igual al del parametro
    async findFamilyByIdForStudent(id: string){
        return StudentFamilyPresenter.toHttpList(await this.studentFamilyService.findAllByStudentId(id));
    }
} 