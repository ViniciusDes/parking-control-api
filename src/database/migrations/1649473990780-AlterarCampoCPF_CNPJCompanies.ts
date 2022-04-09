import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterarCampoCPFCNPJCompanies1649473990780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "companies",
      new TableColumn({ name: "cpf_cpnj", type: "varchar(50)" }),
      new TableColumn({ name: "cpf_cpnj", type: "varchar(14)" })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "companies",
      new TableColumn({ name: "cpf_cpnj", type: "varchar(14)" }),
      new TableColumn({ name: "cpf_cpnj", type: "varchar(50)" })
    );
  }
}
