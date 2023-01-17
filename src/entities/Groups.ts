import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";

@Entity("groups")
class Groups {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({
    name: "id_company",
    referencedColumnName: "id",
  })
  id_company: number;
  @Column()
  description: string;
}

export { Groups };
