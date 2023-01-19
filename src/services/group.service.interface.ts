import { Groups } from "../entities/Groups";
import { GroupDTO } from "../interfaces/groupDTO.interface";
import { GroupPermissionDTO } from "../interfaces/groupPermissioDTO.interface";

interface GroupServiceInterface {
  saveGroup: (data: GroupDTO) => Promise<void>;
  getGroups: (description: string) => Promise<Array<Groups>>;
  saveGroupPermissions: (data: GroupPermissionDTO) => void;
  getGroupPermissions(idGroup?: number): Promise<Array<GroupPermissionDTO>>;
}
export { GroupServiceInterface };
