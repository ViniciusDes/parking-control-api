import { getRepository, Repository } from "typeorm";
import { Menu } from "../entities/Menu";
import { MenuDTO } from "../interfaces/menus.DTO.interface";
import { MenusRepositoryInterface } from "./menus.repository.interface";

export class MenusRepository implements MenusRepositoryInterface {
  private repository: Repository<Menu>;

  constructor() {
    this.repository = getRepository(Menu);
  }

  async getAll(): Promise<Menu[]> {
    const listAllMenus = await this.repository.createQueryBuilder().getMany();

    return listAllMenus;
  }

  async save(menu: MenuDTO): Promise<void> {
    const menu_ = this.repository.create({ ...menu });

    await this.repository.save(menu_);
  }
}
