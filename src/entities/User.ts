import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  id_company: number;

  @Column()
  situation: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
