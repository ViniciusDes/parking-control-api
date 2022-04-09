import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
class Company {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cod_company: string;

  @Column()
  cpf_cpnj: string;

  @Column()
  corporate_name: string;

  @Column()
  fantasy_name: string;

  @Column()
  address_zip_code: string;

  @Column()
  address_state: string;

  @Column()
  address_city: string;

  @Column()
  address_district: string;

  @Column()
  address_street: string;

  @Column()
  address_complement: string;

  @Column()
  situation: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Company };
