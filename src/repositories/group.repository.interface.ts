import { Groups } from "../entities/Groups";
import { GroupDTO } from "../interfaces/groupDTO.interface";

interface GroupRepositoryInterface {
  save: (data: GroupDTO) => Promise<void>;
  getAll: (description: string) => Promise<Array<Groups>>;
}
export { GroupRepositoryInterface };
