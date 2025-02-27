import { GenericRepository } from "src/shared/repositories/generic.repository";
import { BranchEntity } from "../entities/branch.entity";

export const BRANCH_REPOSITORY = 'BRANCH_REPOSITORY';

export interface BranchRepository extends GenericRepository<BranchEntity> {

}