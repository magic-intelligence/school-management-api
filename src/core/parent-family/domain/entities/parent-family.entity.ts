import { PersonEntity } from "src/core/person/domain/entities/person.entity";
import { RelationShipEntity } from "src/core/relationship/domain/entities/relationship.entity";
import { StudentFamilyEntity } from "src/core/student-family/domain/entities/student-family.entity";
import { BaseEntity } from "src/shared/types/base/base.entity";

export class ParentFamilyEntity extends BaseEntity{
    person: PersonEntity;
    relationship: RelationShipEntity;
    studnetFamilies: StudentFamilyEntity[];
}