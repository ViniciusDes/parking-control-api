import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1648510841967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar(250)" },
          { name: "id_profile", type: "int", isNullable: true },
          { name: "id_company", type: "int", isNullable: false },
          { name: "situation", type: "int", isNullable: false, default: 1 },
          { name: "created_at", type: "timestamp", isNullable: false, default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
