import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
import { Menu } from "../entities/Menu";
import { MenuDTO } from "../interfaces/menus.DTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { MenusRepository } from "../repositories/menus.repository";
import { MenusServiceInterface } from "./menus.service.interface";

@injectable()
export class MenusService implements MenusServiceInterface {
  constructor(
    @inject("MenusRepository")
    private menusRepository: MenusRepository
  ) {}

  private errors = {};

  private schemaValidate = Yup.object().shape({
    id: Yup.number().min(1, "Mínimo 1 caracteres, verifique"),
    description: Yup.string().required("Campo obrigatório").max(250, "Máximo 250 caracteres, verifique"),
  });

  async getAll(): Promise<Menu[]> {
    const listMenus = await this.menusRepository.getAll();

    return listMenus;
  }

  async save(menu: MenuDTO): Promise<void> {
    const listMenus = await this.menusRepository.save(menu);
  }
}
