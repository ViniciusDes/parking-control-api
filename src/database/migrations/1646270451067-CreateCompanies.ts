import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1646270451067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "cod_company", type: "varchar(4)" },
          { name: "cpf_cpnj", type: "varchar(14)" },
          { name: "corporate_name", type: "varchar(250)" },
          { name: "fantasy_name", type: "varchar(250)" },
          { name: "address_zip_code", type: "varchar(8)" },
          { name: "address_state", type: "varchar", isNullable: true },
          { name: "address_city", type: "varchar", isNullable: true },
          { name: "address_district", type: "varchar", isNullable: true },
          { name: "address_street", type: "varchar", isNullable: true },
          { name: "address_complement", type: "varchar", isNullable: true },
          { name: "situation", type: "varchar(1)", default: 1, isNullable: false },
          { name: "created_at", type: "timestamp", default: "now()", isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
