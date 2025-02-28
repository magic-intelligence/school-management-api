import { Injectable } from "@nestjs/common";
import { TransactionPort } from "src/shared/ports/transaction.port";
import { DataSource } from "typeorm";

@Injectable()
export class TypeOrmTransaction implements TransactionPort{
    constructor(
        private readonly dataSource: DataSource,
    ){}
    
    // run<T>(callback: () => Promise<T>): Promise<T> {
    //     return this.dataSource.transaction(async ()=>{
    //         return await callback();
    //     });
    // }

    async run<T>(callback: ()=> Promise<T>):Promise<T>{
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction(); // Inicio de la transacción

        try {
            const result = await callback();
            await queryRunner.commitTransaction(); // Si todo va bien, se realiza el commit
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction(); // Si hay errores, se hace un rollback
            throw error; // Se lanza el error optenido para que nestjs lo maneje
        } finally{
            await queryRunner.release(); // Se cierra la conexión
        }
    }
}