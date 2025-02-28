import { BadRequestException } from "@nestjs/common";
import { TypeOrmTransaction } from "../../src/infraestructure/database/typeorm/transactions/typeorm.transaction";
import { Test, TestingModule } from "@nestjs/testing";
import { DataSource, QueryRunner } from "typeorm";

describe('TypeORM Transaction', () => {
    let transaction: TypeOrmTransaction;
    let dataSource: DataSource;
    let queryRunner: QueryRunner;
  
    beforeEach(async () => {
      queryRunner = {
        connect: jest.fn(),
        startTransaction: jest.fn(),
        commitTransaction: jest.fn(),
        rollbackTransaction: jest.fn(),
        release: jest.fn(),
      } as unknown as QueryRunner;
  
      dataSource = {
        createQueryRunner: jest.fn().mockReturnValue(queryRunner),
      } as unknown as DataSource;
  
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          TypeOrmTransaction,
          {
            provide: DataSource,
            useValue: dataSource,
          },
        ],
      }).compile();
  
      transaction = module.get<TypeOrmTransaction>(TypeOrmTransaction);
    });
  
    it('Hacer commit de la transaccion del callback si es exitoso', async () => {
      const callback = jest.fn().mockResolvedValue('success');
  
      const result = await transaction.run(callback);
  
      expect(queryRunner.startTransaction).toHaveBeenCalled();
      expect(callback).toHaveBeenCalled();
      expect(queryRunner.commitTransaction).toHaveBeenCalled();
      expect(queryRunner.rollbackTransaction).not.toHaveBeenCalled();
      expect(queryRunner.release).toHaveBeenCalled();
      expect(result).toBe('success');
    });
  
    it('hacer rollback de la transacción si el  callback lanza un error', async () => {
      const callback = jest.fn().mockRejectedValue(new BadRequestException('Test Error'));
  
      await expect(transaction.run(callback)).rejects.toThrow('Test Error');
  
      expect(queryRunner.startTransaction).toHaveBeenCalled();
      expect(callback).toHaveBeenCalled();
      expect(queryRunner.commitTransaction).not.toHaveBeenCalled();
      expect(queryRunner.rollbackTransaction).toHaveBeenCalled();
      expect(queryRunner.release).toHaveBeenCalled();
    });
  
    it('should always release the connection', async () => {
      const callback = jest.fn().mockRejectedValue(new Error('Test Error'));
  
      await expect(transaction.run(callback)).rejects.toThrow();
  
      expect(queryRunner.release).toHaveBeenCalled();
    });
  });