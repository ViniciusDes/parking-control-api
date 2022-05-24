import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class adicionarSituacaoUser1653358580256 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({ name: "situation", type: "int", isNullable: false, default: 1 })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      "users",
      new TableColumn({ name: "situation", type: "int", isNullable: false, default: 1 })
    );
  }
}
