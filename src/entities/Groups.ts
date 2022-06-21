import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";

@Entity("groups")
class Groups {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Company, (company) => company.id)
  id_company: number;
}

export { Groups };
