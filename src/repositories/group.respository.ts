import { getRepository, Repository } from "typeorm";
import { Groups } from "../entities/Groups";
import { GroupDTO } from "../interfaces/groupDTO.interface";
import { GroupRepositoryInterface } from "./group.repository.interface";

export class GroupRepository implements GroupRepositoryInterface {
  private repository: Repository<Groups>;
  constructor() {
    this.repository = getRepository(Groups);
  }

  async save(data: GroupDTO): Promise<void> {
    const group = this.repository.create(data);

    await this.repository.save(group);
  }
}
