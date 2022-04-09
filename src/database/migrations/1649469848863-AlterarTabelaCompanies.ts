import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AlterarTabelaCompanies1649469848863 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "companies",
      new TableColumn({
        name: "corporate_name",
        type: "varchar(250)",
      })
    );
    await queryRunner.addColumn(
      "companies",
      new TableColumn({
        name: "fantasy_name",
        type: "varchar(250)",
      })
    );

    await queryRunner.dropColumn("companies", new TableColumn({ name: "description", type: "varchar(250)" }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      "companies",
      new TableColumn({
        name: "corporate_name",
        type: "varchar(250)",
      })
    );
    await queryRunner.dropColumn(
      "companies",
      new TableColumn({
        name: "fantasy_name",
        type: "varchar(250)",
      })
    );

    await queryRunner.addColumn(
      "companies",
      new TableColumn({
        name: "description",
        type: "varchar(250)",
        isNullable: true,
      })
    );
  }
}
