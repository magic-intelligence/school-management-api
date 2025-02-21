import { Person } from "src/modules/person/domain/person";
import { RelationShip } from "src/modules/relationship/domain/relationship";
import { StudentFamily } from "src/modules/student-family/domain/student-family";
import { BaseDomain } from "src/shared/types/base/base.domain";

export class Familier extends BaseDomain{
    person: Person;
    relationship: RelationShip;
    studnetFamilies: StudentFamily[];
}