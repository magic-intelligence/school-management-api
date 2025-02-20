import { MigrationInterface, QueryRunner } from "typeorm";

export class StudentEntityCreate1739604562841 implements MigrationInterface {
    name = 'StudentEntityCreate1739604562841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."family_status_enum" AS ENUM('Viven juntos', 'Separados', 'Viudo(a)', 'Padre o madre soltero(a)')`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "grace_minutes" integer, "enrollment_mount" double precision, "enrollment_due_date" TIMESTAMP, "monthly_mount" double precision, "monthly_due_date" TIMESTAMP, "material_mount" double precision, "material_due_date" TIMESTAMP, "entry_time" TIME NOT NULL, "exit_time" TIME NOT NULL, "brothers_number" integer NOT NULL, "allergy_description" text, "family_status" "public"."family_status_enum" NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TYPE "public"."family_status_enum"`);
    }

}
