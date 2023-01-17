import { getRepository, Repository } from "typeorm";
import { Permissions } from "../entities/Permission";
import { GetPermissionsDTO, PermissionsDTO } from "../interfaces/permissionsDTO.interface";
import { upperCase } from "../utils/intex";
import { PermissionsRepositoryInterface } from "./permissions.repository.interface";

class PermissionsRepository implements PermissionsRepositoryInterface {
  private repository: Repository<Permissions>;

  constructor() {
    this.repository = getRepository(Permissions);
  }

  async save({ id, description, situation, id_company }: PermissionsDTO): Promise<void> {
    const permission = this.repository.create({ id, description: upperCase(description), situation, id_company });

    await this.repository.save(permission);
  }

  async getAll(description?: string): Promise<GetPermissionsDTO> {
    let return_ = [];
    return_ = await getRepository(Permissions)
      .createQueryBuilder("permissions")
      .where("permissions.description like :description", { description: `%${upperCase(description)}%` })
      .getMany();

    return return_;
  }
}

export { PermissionsRepository };
