import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1645884246870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          { name: "ID", type: "int", isPrimary: true },
          { name: "DESCRIPTION", type: "varchar" },
          { name: "VALUE_HOUR", type: "decimal" },
          { name: "VALUE_ADDITIONAL", type: "decimal" },
          { name: "CREATED_AT", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
