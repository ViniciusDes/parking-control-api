import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;

  @Column()
  value_hour: number;

  @Column()
  value_additional: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Category };
