import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNicknameToStudent1740179914209 implements MigrationInterface {
    name = 'AddNicknameToStudent1740179914209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "nickname" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "nickname"`);
    }

}
