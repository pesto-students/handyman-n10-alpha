import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserEntity1636921896324 implements MigrationInterface {
  name = 'createUserEntity1636921896324';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'user', 'handyman')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "created_by" uuid, "modified_by" uuid, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "role" "public"."users_role_enum" array NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
