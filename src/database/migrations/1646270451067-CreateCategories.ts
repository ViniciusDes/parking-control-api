import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { query } from "express";

export class CreateCategories1646270451067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "ID",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "DESCRIPTION", type: "varchar" },
          { name: "VALUE_HOUR", type: "decimal" },
          { name: "VALUE_ADDITIONAL", type: "decimal" },
          { name: "CREATED_AT", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
