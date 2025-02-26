import { GenericRepository } from "src/shared/types/GenericRepository";
import { BranchEntity } from "../entities/branch.entity";

export const BRANCH_REPOSITORY = 'BRANCH_REPOSITORY';

export interface BranchRepository extends GenericRepository<BranchEntity> {

}