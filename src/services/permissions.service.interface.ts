import { GetPermissionsDTO, PermissionsDTO } from "../interfaces/permissionsDTO.interface";

export class PermissionsServicesInterface {
  save: (data: PermissionsDTO) => Promise<void>;
  getAll: (description?: string) => Promise<GetPermissionsDTO>;
}
