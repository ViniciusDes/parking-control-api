import { PermissionsDTO } from "../interfaces/permissionsDTO.interface";

export class PermissionsServicesInterface {
  save: (data: PermissionsDTO) => Promise<void>;
}
