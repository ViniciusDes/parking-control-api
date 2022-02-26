import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryColumn()
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
