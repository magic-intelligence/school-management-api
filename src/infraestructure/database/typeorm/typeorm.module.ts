import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TRANSACTION_PORT } from 'src/shared/ports/transaction.port';
import { TypeOMRTransaction } from './transactions/typeorm.transaction';

@Module({
    imports: [
        ConfigModule, // <-- Asegura que ConfigService esté disponible
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService], 
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [`${__dirname}/../../../**/*.schema.{ts,js}`],
                synchronize: false,
            }),
        }),
    ],
})
export class TypeormConfigModule {}