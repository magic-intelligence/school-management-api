import { Module } from '@nestjs/common';
import { TRANSACTION_PORT } from 'src/shared/ports/transaction.port';
import { TypeOrmTransaction } from './typeorm.transaction';

@Module({
    providers:[
        {
            provide: TRANSACTION_PORT,
            useClass: TypeOrmTransaction
        }
    ],
    exports:[
        TRANSACTION_PORT
    ]
})
export class TransactionModule {}