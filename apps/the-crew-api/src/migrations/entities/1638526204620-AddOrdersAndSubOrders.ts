import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOrdersAndSubOrders1638526204620 implements MigrationInterface {
  name = 'AddOrdersAndSubOrders1638526204620';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "orders" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "consumer_id" uuid NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sub_orders" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "service_id" uuid NOT NULL, "rating_id" uuid NOT NULL, "order_id" uuid NOT NULL, "status" text NOT NULL, "quantity" numeric NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_909d792a7f7b751a851223dee9a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_a8d946ab774b89645c44046a311" FOREIGN KEY ("consumer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "FK_f7487f750a655e7a8fdf91aadeb" FOREIGN KEY ("service_id") REFERENCES "service_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "FK_f6fdc0f65057389bcdb58575b9a" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "FK_f6fdc0f65057389bcdb58575b9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "FK_f7487f750a655e7a8fdf91aadeb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_a8d946ab774b89645c44046a311"`,
    );
    await queryRunner.query(`DROP TABLE "sub_orders"`);
    await queryRunner.query(`DROP TABLE "orders"`);
  }
}
