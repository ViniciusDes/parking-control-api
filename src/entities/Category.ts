import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  value_hour: number;

  @Column()
  description: string;

  @Column()
  value_additional: number;

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({
    name: "id_company",
    referencedColumnName: "id",
  })
  id_company: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Category };
