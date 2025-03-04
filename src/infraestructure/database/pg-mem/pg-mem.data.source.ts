import { DataType, newDb } from 'pg-mem';

export const pgMemDataSource = async () => {
  const db = newDb();

  // Registrar la función current_database()
  db.public.registerFunction({
    name: 'current_database',
    args:[DataType.text],
    returns: DataType.text,
    implementation: () => 'pg_mem',
  });

  const dataSource = await db.adapters.createTypeormDataSource({
    type: 'postgres',
    entities: [`${__dirname}/../../../**/*.schema.{ts,js}`],
    synchronize: true,
  });

  await dataSource.initialize();

  return dataSource;
};
