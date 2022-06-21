import { Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Groups } from "./Groups";
import { User } from "./User";

@Entity("groups_users")
class GroupsUsers {
  @PrimaryColumn()
  @ManyToMany(() => User, (user) => user.id)
  id_user: number;

  @PrimaryColumn()
  @ManyToMany(() => Groups, (group) => group.id)
  id_group: number;
}

export { GroupsUsers };
