import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFamiliersEntities1740124812018 implements MigrationInterface {
    name = 'CreateFamiliersEntities1740124812018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "relationship" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_67eb56a3f16da3d901a8ae446a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "familier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "person_id" uuid, "relationship_id" uuid, CONSTRAINT "REL_34f5fbe974e77b567396d4b248" UNIQUE ("person_id"), CONSTRAINT "REL_6c6e7f7b3ca41e40c932bdf1d4" UNIQUE ("relationship_id"), CONSTRAINT "PK_5b3730ba7cc1f4391ca4ef2c985" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "student_id" uuid, "familier_id" uuid, CONSTRAINT "PK_598f818e59e555daf4b31185eed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_14092a0ddb4f4b457f1d05b0fc6" UNIQUE ("phone_number")`);
        await queryRunner.query(`ALTER TABLE "familier" ADD CONSTRAINT "FK_34f5fbe974e77b567396d4b2489" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "familier" ADD CONSTRAINT "FK_6c6e7f7b3ca41e40c932bdf1d47" FOREIGN KEY ("relationship_id") REFERENCES "relationship"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_family" ADD CONSTRAINT "FK_1526c4a0d6537d80f13558343d7" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_family" ADD CONSTRAINT "FK_63ef95c225243898ad146665802" FOREIGN KEY ("familier_id") REFERENCES "familier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_family" DROP CONSTRAINT "FK_63ef95c225243898ad146665802"`);
        await queryRunner.query(`ALTER TABLE "student_family" DROP CONSTRAINT "FK_1526c4a0d6537d80f13558343d7"`);
        await queryRunner.query(`ALTER TABLE "familier" DROP CONSTRAINT "FK_6c6e7f7b3ca41e40c932bdf1d47"`);
        await queryRunner.query(`ALTER TABLE "familier" DROP CONSTRAINT "FK_34f5fbe974e77b567396d4b2489"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_14092a0ddb4f4b457f1d05b0fc6"`);
        await queryRunner.query(`DROP TABLE "student_family"`);
        await queryRunner.query(`DROP TABLE "familier"`);
        await queryRunner.query(`DROP TABLE "relationship"`);
    }

}
