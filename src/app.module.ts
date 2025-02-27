import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfigModule } from './infraestructure/database/typeorm/typeorm.module';
import { StudentModule } from './core/student/student.module';
import { PersonModule } from './core/person/person.module';
import { TransactionModule } from './infraestructure/database/typeorm/transactions/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeormConfigModule,
    StudentModule,
    PersonModule,
    TransactionModule
  ]
})
export class AppModule {}
