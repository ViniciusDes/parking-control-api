import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("permissions")
class Permissions {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;

  @Column()
  situation: string;

  @Column()
  id_company: number;
}

export { Permissions };
