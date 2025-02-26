import { MigrationInterface, QueryRunner } from "typeorm";

export class BasicStructureEntities1740517510278 implements MigrationInterface {
    name = 'BasicStructureEntities1740517510278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "postal_code" integer NOT NULL, "street" text NOT NULL, "interior_number" character varying(10), "exterior_number" character varying(10), "district" text NOT NULL, "city" text NOT NULL, "state" character varying(100) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "address_id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "REL_430511286839d990b8b5ab25a5" UNIQUE ("address_id"), CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."person_gender_enum" AS ENUM('f', 'm')`);
        await queryRunner.query(`CREATE TABLE "person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid NOT NULL, "address_id" uuid, "name" character varying NOT NULL, "paternal_surname" character varying NOT NULL, "maternal_surname" character varying NOT NULL, "birthday" TIMESTAMP, "phone_number" character varying(20), "gender" "public"."person_gender_enum" NOT NULL, CONSTRAINT "UQ_14092a0ddb4f4b457f1d05b0fc6" UNIQUE ("phone_number"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status_family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_e7922f63b6e332fefba92554ce7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nickname" character varying, "grace_minutes" integer, "enrollment_mount" double precision, "enrollment_due_date" TIMESTAMP, "monthly_mount" double precision, "monthly_due_date" TIMESTAMP, "material_mount" double precision, "material_due_date" TIMESTAMP, "entry_time" TIME NOT NULL, "exit_time" TIME NOT NULL, "brothers_number" integer NOT NULL, "allergy_description" text, "family_status_id" uuid NOT NULL, "person_id" uuid NOT NULL, CONSTRAINT "REL_39e682b52a55177c20475b1a19" UNIQUE ("family_status_id"), CONSTRAINT "REL_f68e92722db1a5e99b341a8cf9" UNIQUE ("person_id"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relationship" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_67eb56a3f16da3d901a8ae446a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parent_family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "person_id" uuid NOT NULL, "relationship_id" uuid NOT NULL, CONSTRAINT "REL_9b3655eab4da007cec517e83b7" UNIQUE ("person_id"), CONSTRAINT "REL_73902f1a792f393562f5ca3903" UNIQUE ("relationship_id"), CONSTRAINT "PK_797c0ff24bf2a360dd879fd0325" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "student_id" uuid NOT NULL, "parent_family_id" uuid NOT NULL, CONSTRAINT "PK_598f818e59e555daf4b31185eed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_430511286839d990b8b5ab25a5c" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_d1441529d20f41a2f55efcdf207" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_39e682b52a55177c20475b1a19e" FOREIGN KEY ("family_status_id") REFERENCES "status_family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_f68e92722db1a5e99b341a8cf9b" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parent_family" ADD CONSTRAINT "FK_9b3655eab4da007cec517e83b75" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parent_family" ADD CONSTRAINT "FK_73902f1a792f393562f5ca3903f" FOREIGN KEY ("relationship_id") REFERENCES "relationship"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_family" ADD CONSTRAINT "FK_1526c4a0d6537d80f13558343d7" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_family" ADD CONSTRAINT "FK_7d60cd5a31c6e3d741609cc07b5" FOREIGN KEY ("parent_family_id") REFERENCES "parent_family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_family" DROP CONSTRAINT "FK_7d60cd5a31c6e3d741609cc07b5"`);
        await queryRunner.query(`ALTER TABLE "student_family" DROP CONSTRAINT "FK_1526c4a0d6537d80f13558343d7"`);
        await queryRunner.query(`ALTER TABLE "parent_family" DROP CONSTRAINT "FK_73902f1a792f393562f5ca3903f"`);
        await queryRunner.query(`ALTER TABLE "parent_family" DROP CONSTRAINT "FK_9b3655eab4da007cec517e83b75"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_f68e92722db1a5e99b341a8cf9b"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_39e682b52a55177c20475b1a19e"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_d1441529d20f41a2f55efcdf207"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_430511286839d990b8b5ab25a5c"`);
        await queryRunner.query(`DROP TABLE "student_family"`);
        await queryRunner.query(`DROP TABLE "parent_family"`);
        await queryRunner.query(`DROP TABLE "relationship"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "status_family"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TYPE "public"."person_gender_enum"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
