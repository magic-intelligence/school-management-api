import { Injectable } from "@nestjs/common";
import { TransactionPort } from "src/shared/ports/transaction.port";
import { DataSource } from "typeorm";

@Injectable()
export class TypeOMRTransaction implements TransactionPort{
    constructor(
        private readonly dataSource: DataSource,
    ){}
    
    run<T>(fn: () => Promise<T>): Promise<T> {
        return this.dataSource.transaction(async ()=>{
            return await fn();
        });
    }
}