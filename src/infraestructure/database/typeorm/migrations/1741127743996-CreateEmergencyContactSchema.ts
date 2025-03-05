import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmergencyContactSchema1741127743996 implements MigrationInterface {
    name = 'CreateEmergencyContactSchema1741127743996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "emergency_contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "student_family_id" uuid NOT NULL, "priority_level" integer NOT NULL, CONSTRAINT "REL_86deb4ac2d34063bd0f962a5ae" UNIQUE ("student_family_id"), CONSTRAINT "PK_922933ddef34a7e1ed99ae692ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_cd587348ca3fec07931de208299" UNIQUE ("address_id")`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_39e682b52a55177c20475b1a19e"`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "UQ_39e682b52a55177c20475b1a19e" UNIQUE ("family_status_id")`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_cd587348ca3fec07931de208299" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_39e682b52a55177c20475b1a19e" FOREIGN KEY ("family_status_id") REFERENCES "status_family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emergency_contact" ADD CONSTRAINT "FK_86deb4ac2d34063bd0f962a5ae4" FOREIGN KEY ("student_family_id") REFERENCES "student_family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emergency_contact" DROP CONSTRAINT "FK_86deb4ac2d34063bd0f962a5ae4"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_39e682b52a55177c20475b1a19e"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_cd587348ca3fec07931de208299"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "UQ_39e682b52a55177c20475b1a19e"`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_39e682b52a55177c20475b1a19e" FOREIGN KEY ("family_status_id") REFERENCES "status_family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_cd587348ca3fec07931de208299"`);
        await queryRunner.query(`DROP TABLE "emergency_contact"`);
    }

}
