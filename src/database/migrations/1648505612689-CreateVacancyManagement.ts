import { ManyToOne, MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateVacancyManagement1648505612689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vacancy_management",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "start_time", type: "varchar" },
          { name: "end_time", type: "varchar" },
          { name: "value_hour", type: "decimal" },
          { name: "value_hour_additional", type: "decimal" },
          { name: "value_total", type: "decimal" },
          { name: "board", type: "varchar" },
          { name: "is_parked", type: "int" },
          { name: "description", type: "varchar" },
          { name: "vacancy_number", type: "int" },
        ],
      })
    );

    await queryRunner.addColumn(
      "vacancy_management",
      new TableColumn({
        name: "category_id",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "vacancy_management",
      new TableForeignKey({
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("vacancy_management");
    const foreignKeyCategory = table.foreignKeys.find((fk) => fk.columnNames.indexOf("category_id") !== -1);
    await queryRunner.dropForeignKey("vacancy_management", foreignKeyCategory);
    await queryRunner.dropColumn("vacancy_management", "category_id");
    await queryRunner.dropTable("vacancy_management");
  }
}
