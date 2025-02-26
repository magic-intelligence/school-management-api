import { BranchEntity } from "src/core/branch/domain/entities/branch.entity";
import { BranchRepository } from "src/core/branch/domain/repository/branch.repository";

export class BranchRepositoryImpl implements BranchRepository {
    save(entity: BranchEntity): Promise<BranchEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<BranchEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<BranchEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}