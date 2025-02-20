import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePersonEntity1739887939315 implements MigrationInterface {
    name = 'CreatePersonEntity1739887939315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."person_gender_enum" AS ENUM('f', 'm')`);
        await queryRunner.query(`CREATE TABLE "person" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "is_active" boolean NOT NULL DEFAULT true, 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "name" character varying NOT NULL, 
            "paternal_surname" character varying NOT NULL, 
            "maternal_surname" character varying NOT NULL, 
            "birthday" TIMESTAMP, 
            "phone_number" character varying(20) NULL, 
            "gender" "public"."person_gender_enum" NOT NULL, 
            CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student" ADD "person_id" uuid`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "UQ_f68e92722db1a5e99b341a8cf9b" UNIQUE ("person_id")`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_f68e92722db1a5e99b341a8cf9b" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_f68e92722db1a5e99b341a8cf9b"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "UQ_f68e92722db1a5e99b341a8cf9b"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "person_id"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TYPE "public"."person_gender_enum"`);
    }

}
