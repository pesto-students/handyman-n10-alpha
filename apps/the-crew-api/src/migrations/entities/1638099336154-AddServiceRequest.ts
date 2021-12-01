import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddServiceRequest1638099336154 implements MigrationInterface {
  name = 'AddServiceRequest1638099336154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service_requests" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" text array NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "included" text array NOT NULL, "excluded" text array NOT NULL, "price" integer NOT NULL, "provider_id" uuid NOT NULL, CONSTRAINT "PK_ee60bcd826b7e130bfbd97daf66" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_requests" ADD CONSTRAINT "FK_f2bd4166e2e8f5804d7c459bc98" FOREIGN KEY ("provider_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_requests" DROP CONSTRAINT "FK_f2bd4166e2e8f5804d7c459bc98"`,
    );
    await queryRunner.query(`DROP TABLE "service_requests"`);
  }
}
