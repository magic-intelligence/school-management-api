import { EmergencyContactModule } from './core/emergency-contact/emergency-contact.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfigModule } from './infraestructure/database/typeorm/typeorm.module';
import { StudentModule } from './core/student/student.module';
import { TransactionModule } from './infraestructure/database/typeorm/transactions/transaction.module';

@Module({
  imports: [
    EmergencyContactModule,
    ConfigModule.forRoot(),
    TypeormConfigModule,
    StudentModule,
    TransactionModule,
  ],
})
export class AppModule {}
