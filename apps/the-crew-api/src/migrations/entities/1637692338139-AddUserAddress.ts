import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserAddress1637692338139 implements MigrationInterface {
  name = 'AddUserAddress1637692338139';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_addresses" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "flat" character varying NOT NULL, "street" character varying NOT NULL, "pin_code" integer NOT NULL, "is_default" boolean NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_8abbeb5e3239ff7877088ffc25b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_addresses" ADD CONSTRAINT "FK_7a5100ce0548ef27a6f1533a5ce" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_addresses" DROP CONSTRAINT "FK_7a5100ce0548ef27a6f1533a5ce"`,
    );
    await queryRunner.query(`DROP TABLE "user_addresses"`);
  }
}
