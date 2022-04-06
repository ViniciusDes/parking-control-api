import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateCategories1646450525812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "description", type: "varchar" },
          { name: "value_hour", type: "decimal" },
          { name: "value_additional", type: "decimal" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.addColumn(
      "categories",
      new TableColumn({
        name: "id_company",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "categories",
      new TableForeignKey({
        columnNames: ["id_company"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("categories");
    const foreignKeyCompany = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_company") !== -1);
    await queryRunner.dropForeignKey("categories", foreignKeyCompany);
    await queryRunner.dropColumn("categories", "id_company");
    await queryRunner.dropTable("categories");
  }
}
