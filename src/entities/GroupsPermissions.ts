import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Groups } from "./Groups";
import { Permissions } from "./Permission";

@Entity("groups_permissions")
class GroupsPermissions {
  @PrimaryColumn()
  @ManyToMany(() => Permissions, (permission) => permission.id)
  id_permission: number;

  @PrimaryColumn()
  @ManyToMany(() => Groups, (group) => group.id)
  id_group: number;

  // @Column()
  // @ManyToMany(() => Groups, (group) => group.description)
  // description_group: number;
}

export { GroupsPermissions };
