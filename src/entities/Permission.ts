import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";

@Entity("permissions")
class Permissions {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;

  @Column()
  situation: string;

  @Column()
  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn()
  id_company: number;
  company: Company;
}

export { Permissions };
