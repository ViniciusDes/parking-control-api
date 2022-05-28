import { getRepository, Repository } from "typeorm";
import { Permissions } from "../entities/Permission";
import { PermissionsDTO } from "../interfaces/permissionsDTO.interface";
import { PermissionsRepositoryInterface } from "./permissions.repository.interface";

class PermissionsRepository implements PermissionsRepositoryInterface {
  private repository: Repository<Permissions>;

  constructor() {
    this.repository = getRepository(Permissions);
  }

  async save({ id, description, situation, id_company }: PermissionsDTO): Promise<void> {
    const permission = this.repository.create({ id, description, situation, id_company });

    await this.repository.save(permission);
  }
}

export { PermissionsRepository };
