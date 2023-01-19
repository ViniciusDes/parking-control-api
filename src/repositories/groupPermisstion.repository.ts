import { getRepository, Repository } from "typeorm";
import { Groups } from "../entities/Groups";
import { GroupsPermissions } from "../entities/GroupsPermissions";
import { Permissions } from "../entities/Permission";
import { GroupPermissionDTO } from "../interfaces/groupPermissioDTO.interface";
import { GroupPermissionRepositoryInterface } from "./groupPermisstion.repository.interface";

export class GroupPermissionRepository implements GroupPermissionRepositoryInterface {
  protected repository: Repository<GroupsPermissions>;

  constructor() {
    this.repository = getRepository(GroupsPermissions);
  }

  save(data: GroupPermissionDTO) {
    const groupPermission = this.repository.create(data);

    this.repository.save(groupPermission);
  }

  async getAll(idGroup?: number): Promise<Array<GroupPermissionDTO>> {
    let listGroupsPermissions = [];
    if (idGroup) {
      listGroupsPermissions = await this.repository
        .createQueryBuilder("groups_permissions")
        .select([
          "groups_permissions.id_group, groups_permissions.id_permission",
          "gp.description as group_description",
          "prm.description as permission_description",
        ])
        .innerJoin(Groups, "gp", "gp.id = :idGroup", { idGroup: idGroup })
        .innerJoin(Permissions, "prm", "prm.id = groups_permissions.id_permission")
        .where("groups_permissions.id_group = :idGroup", { idGroup })
        .getRawMany();
    } else {
      listGroupsPermissions = await this.repository
        .createQueryBuilder("groups_permissions")
        .select([
          "groups_permissions.id_group, groups_permissions.id_permission",
          "gp.description as group_description",
          "prm.description as permission_description",
        ])
        .innerJoin(Groups, "gp", "gp.id = groups_permissions.id_group")
        .innerJoin(Permissions, "prm", "prm.id = groups_permissions.id_permission")
        .getRawMany();

      console.log("listGroupsPermissions", listGroupsPermissions);
    }

    return listGroupsPermissions;
  }
}
