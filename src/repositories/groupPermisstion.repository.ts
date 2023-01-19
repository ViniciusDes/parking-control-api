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
    let query = this.repository
      .createQueryBuilder("groups_permissions")
      .select([
        "groups_permissions.id_group, groups_permissions.id_permission",
        "gp.description as group_description",
        "prm.description as permission_description",
      ])
      .innerJoin(Groups, "gp", "gp.id = groups_permissions.id_group")
      .innerJoin(Permissions, "prm", "prm.id = groups_permissions.id_permission");

    if (idGroup) {
      query = query.where("groups_permissions.id_group = :idGroup", { idGroup });
    }

    listGroupsPermissions = await query.getRawMany();

    return listGroupsPermissions;
  }
}
