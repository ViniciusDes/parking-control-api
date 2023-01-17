import { GroupDTO } from "../interfaces/groupDTO.interface";

interface GroupServiceInterface {
  saveGroup: (data: GroupDTO) => Promise<void>;
}
export { GroupServiceInterface };
