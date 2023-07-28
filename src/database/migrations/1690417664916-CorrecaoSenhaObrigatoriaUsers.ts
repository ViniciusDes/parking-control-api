import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CorrecaoSenhaObrigatoriaUsers1690417664916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "users",
      "password",
      new TableColumn({
        name: "password",
        type: "varchar(100)",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "users",
      "password",
      new TableColumn({
        name: "password",
        type: "varchar(100)",
        isNullable: false,
      })
    );
  }
}
