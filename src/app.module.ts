import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfigModule } from './infraestructure/database/typeorm/typeorm.module';
import { StudentModule } from './modules/student/student.module';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeormConfigModule,
    StudentModule,
    PersonModule,
  ],
})
export class AppModule {}
