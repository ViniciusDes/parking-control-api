import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Category } from "./Category";

@Entity("vacancy_management")
class VacancyManagement {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({
    name: "category_id",
    referencedColumnName: "id",
  })
  category_id: number;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  value_hour: number;

  @Column()
  value_hour_additional: number;

  @Column()
  value_total: number;

  @Column()
  board: string;

  @Column()
  is_parked: number;

  @Column()
  description: string;

  @Column()
  vacancy_number: number;
}

export { VacancyManagement };
