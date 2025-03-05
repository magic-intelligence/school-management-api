import { MigrationInterface, QueryRunner } from "typeorm";

export class PriorityLevelIsUnique1741153472340 implements MigrationInterface {
    name = 'PriorityLevelIsUnique1741153472340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emergency_contact" ADD CONSTRAINT "UQ_97a4ba7872af4c496c479f56414" UNIQUE ("priority_level")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emergency_contact" DROP CONSTRAINT "UQ_97a4ba7872af4c496c479f56414"`);
    }

}
