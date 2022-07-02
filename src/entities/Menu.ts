import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menus")
class Menu {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;

  @Column()
  structure: string;

  @Column()
  id_parent_menu: number;

  @Column()
  path_page: string;

  @Column()
  icon: string;
}

export { Menu };
