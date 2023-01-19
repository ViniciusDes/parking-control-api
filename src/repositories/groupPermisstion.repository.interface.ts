import { GroupPermissionDTO } from "../interfaces/groupPermissioDTO.interface";

export interface GroupPermissionRepositoryInterface {
  save: (data: GroupPermissionDTO) => void;
  getAll: (idGroup?: number) => Promise<Array<GroupPermissionDTO>>;
}
