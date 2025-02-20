import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseTypeOrmEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id: string;
    @Column({name: 'is_active', default: true, nullable: false})
    isActive: boolean;
    @Column({name: 'created_at', type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    @Column({name: 'updated_at', type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP',  onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}