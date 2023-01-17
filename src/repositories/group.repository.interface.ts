import { GroupDTO } from "../interfaces/groupDTO.interface";

interface GroupRepositoryInterface {
  save: (data: GroupDTO) => Promise<void>;
}
export { GroupRepositoryInterface };
