import { PermissionsDTO } from "../interfaces/permissionsDTO.interface";

export class PermissionsRepositoryInterface {
  save: (data: PermissionsDTO) => Promise<void>;
}
