import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class adicionarPasswordUser1653703382248 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({ name: "password", type: "varchar(250)", isNullable: false })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      "users",
      new TableColumn({ name: "password", type: "varchar(250)", isNullable: false })
    );
  }
}
