import { MenuDTO } from "../interfaces/menus.DTO.interface";
import { MenusRepositoryInterface } from "../repositories/menus.repository.interface";

export interface MenusServiceInterface extends MenusRepositoryInterface {
  verifyMenuAlreadyExists(menuRequest: MenuDTO): Promise<void>;
}
