import { Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Permissions } from "./Permission";
import { User } from "./User";

@Entity("users_permissions")
class UsersPermissions {
  @PrimaryColumn()
  @ManyToMany(() => User, (user) => user.id)
  id_user: number;

  @PrimaryColumn()
  @ManyToMany(() => Permissions, (permission) => permission.id)
  id_permission: number;
}

export { UsersPermissions };
