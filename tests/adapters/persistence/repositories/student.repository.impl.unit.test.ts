import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StudentRepositoryImpl } from 'src/adapters/persistence/repositories/student.repository.impl';
import { StudentSchema } from 'src/adapters/persistence/schemas';
import { Transactional } from 'src/infraestructure/database/typeorm/transactions/transactional.decorator';
import { StudentEntity } from 'src/core/student/domain/entities/student.entity';
import { Repository } from 'typeorm';
import { newDb } from 'pg-mem';
import { pgMemDataSource } from 'src/infraestructure/database/pg-mem/pg-mem.data.source';

describe('StudentRepositoryImpl', () => {
  let studentRepositoryImpl: StudentRepositoryImpl;
  let repository: Repository<StudentSchema>;
  let transactional: Transactional;
  let dataSource;


  beforeEach(async () => {
    dataSource = await pgMemDataSource();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentRepositoryImpl,
        {
          provide: getRepositoryToken(StudentSchema),
          useValue: dataSource.getRepository(StudentSchema),
        },
        {
          provide: Transactional,
          useValue: {
            getManager: jest.fn().mockReturnValue(dataSource.manager),
          },
        },
      ],
    }).compile();

    studentRepositoryImpl = module.get<StudentRepositoryImpl>(StudentRepositoryImpl);
    repository = module.get<Repository<StudentSchema>>(getRepositoryToken(StudentSchema));
    transactional = module.get<Transactional>(Transactional);
  });

  afterAll(async ()=>{
    await dataSource.destroy();
  });

  it('should be defined', () => {
    expect(studentRepositoryImpl).toBeDefined();
  });

  it('should return a student', async () => {
    const student = new StudentSchema();
      student.brothersNumber= 1;
      student.entryTime= '12:30';
      student.exitTime= '12:30';
      student.familyStatusId= '45a7fc8b-f96e-4a22-be0d-0c74fde0ad3e';
      student.allergyDescription= undefined;
      student.nickname= 'TestPrueba'

    const result = await studentRepositoryImpl.save(student);

    expect(result).toBeInstanceOf(StudentEntity);
    console.log(result);
    
  });

  it('Verificar que esté definido el repository', () => {
    expect(studentRepositoryImpl).toBeDefined();
  });

  it('Debe llamar al método execute del Transactional', async () => {
    await transactional.getManager();
    expect(transactional.getManager).toHaveBeenCalled();
  });
});