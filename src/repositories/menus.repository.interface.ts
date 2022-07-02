import { Menu } from "../entities/Menu";
import { MenuDTO } from "../interfaces/menus.DTO.interface";

export interface MenusRepositoryInterface {
  getAll(): Promise<Menu[]>;
  getMenuByStructure(structure: string): Promise<Menu>;
  getMenuByPathPage(pathPage: string): Promise<Menu>;
  save(menu: MenuDTO): Promise<void>;
}
