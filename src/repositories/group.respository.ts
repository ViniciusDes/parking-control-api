import { getRepository, Repository } from "typeorm";
import { Groups } from "../entities/Groups";
import { GroupDTO } from "../interfaces/groupDTO.interface";
import { upperCase } from "../utils/intex";
import { GroupRepositoryInterface } from "./group.repository.interface";

export class GroupRepository implements GroupRepositoryInterface {
  private repository: Repository<Groups>;
  constructor() {
    this.repository = getRepository(Groups);
  }

  async save(data: GroupDTO): Promise<void> {
    const group = this.repository.create({
      ...data,
      description: data.description.toUpperCase(),
    });

    await this.repository.save(group);
  }

  async getAll(description: string): Promise<Array<Groups>> {
    console.log("description", description);
    const groups = await this.repository
      .createQueryBuilder("groups")
      .where("groups.description like :description", { description: `%${upperCase(description)}%` })
      .getMany();

    return groups;
  }
}
