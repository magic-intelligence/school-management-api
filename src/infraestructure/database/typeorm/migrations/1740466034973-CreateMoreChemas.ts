import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMoreChemas1740466034973 implements MigrationInterface {
    name = 'CreateMoreChemas1740466034973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "postal_code" integer NOT NULL, "street" text NOT NULL, "interior_number" character varying(10), "exterior_number" character varying(10), "district" text NOT NULL, "city" text NOT NULL, "state" character varying(100) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address_id" uuid, CONSTRAINT "REL_430511286839d990b8b5ab25a5" UNIQUE ("address_id"), CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD "branch_id" uuid`);
        await queryRunner.query(`ALTER TABLE "person" ADD "address_id" uuid`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_cd587348ca3fec07931de208299" UNIQUE ("address_id")`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_430511286839d990b8b5ab25a5c" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_d1441529d20f41a2f55efcdf207" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_cd587348ca3fec07931de208299" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_cd587348ca3fec07931de208299"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_d1441529d20f41a2f55efcdf207"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_430511286839d990b8b5ab25a5c"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_cd587348ca3fec07931de208299"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "address_id"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "branch_id"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
