import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";

export class StudentFamilyPresenter {
    static toHttp(studentFamily: StudentFamilyEntity){
        return {
            id: studentFamily.id,
            studentId: studentFamily.studentId,
            parentFamily:{
                name: studentFamily.parentFamily.person.name,
                paternalSurname: studentFamily.parentFamily.person.paternalSurname,
                maternalSurname: studentFamily.parentFamily.person.maternalSurname,
                relationship: studentFamily.parentFamily.relationship.name,
                description: studentFamily.parentFamily.relationship.description,
            }
        }
    }

    static toHttpList(studentFamilies: StudentFamilyEntity[]){
        return {
            studentFamilies: studentFamilies.map(item => this.toHttp(item))
        };
    }
}