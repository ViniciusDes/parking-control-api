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
  ID: number;

  @Column()
  DESCRIPTION: string;

  @Column()
  VALUE_HOUR: number;

  @Column()
  VALUE_ADDITIONAL: number;

  @CreateDateColumn()
  CREATED_AT: Date;
}

export { Category };
