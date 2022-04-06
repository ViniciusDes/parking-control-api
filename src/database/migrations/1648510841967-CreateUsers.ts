import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

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
          { name: "situation", type: "int", isNullable: false, default: 1 },
          { name: "created_at", type: "timestamp", isNullable: false, default: "now()" },
        ],
      })
    );

    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "id_company",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["id_company"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("users");
    const foreignKeyCompany = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_company") !== -1);
    await queryRunner.dropForeignKey("users", foreignKeyCompany);
    await queryRunner.dropColumn("users", "id_company");
    await queryRunner.dropTable("users");
  }
}