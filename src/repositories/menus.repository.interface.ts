import { Menu } from "../entities/Menu";
import { MenuDTO } from "../interfaces/menus.DTO.interface";

export interface MenusRepositoryInterface {
  getAll(): Promise<Menu[]>;
  save(menu: MenuDTO): Promise<void>;
}
