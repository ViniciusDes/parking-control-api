import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CorrecaoVacancyDataECamposObrigatorios1655908710621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "vacancy_management",
      "end_time",
      new TableColumn({
        name: "end_time",
        type: "TIMESTAMP",
        isNullable: true,
      })
    );
    await queryRunner.changeColumn(
      "vacancy_management",
      "start_time",
      new TableColumn({
        name: "start_time",
        type: "TIMESTAMP",
        isNullable: false,
        default: "now()",
      })
    );

    await queryRunner.changeColumn(
      "vacancy_management",
      "value_hour_additional",
      new TableColumn({
        name: "value_hour_additional",
        type: "decimal",
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      "vacancy_management",
      "value_total",
      new TableColumn({
        name: "value_total",
        type: "decimal",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "vacancy_management",
      "end_time",
      new TableColumn({
        name: "end_time",
        type: "varchar",
        isNullable: false,
      })
    );
    await queryRunner.changeColumn(
      "vacancy_management",
      "start_time",
      new TableColumn({
        name: "start_time",
        type: "varchar",
        isNullable: false,
      })
    );
    await queryRunner.changeColumn(
      "vacancy_management",
      "value_hour_additional",
      new TableColumn({
        name: "value_hour_additional",
        type: "decimal",
        isNullable: false,
      })
    );

    await queryRunner.changeColumn(
      "vacancy_management",
      "value_total",
      new TableColumn({
        name: "value_total",
        type: "decimal",
        isNullable: false,
      })
    );
  }
}
