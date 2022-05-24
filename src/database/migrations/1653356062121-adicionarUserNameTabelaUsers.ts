import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class adicionarUserNameTabelaUsers1653356062121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({ name: "email", type: "varchar(250)", isNullable: true }),
      new TableColumn({ name: "cpf", type: "varchar(11)", isNullable: true }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", [
      new TableColumn({ name: "email", type: "varchar(250)" }),
      new TableColumn({ name: "cpf", type: "varchar(11)" }),
    ]);
  }
}
