import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
import { Menu } from "../entities/Menu";
import { MenuDTO } from "../interfaces/menus.DTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { MenusRepository } from "../repositories/menus.repository";
import { messageValidateMaxCaracteres, messageValidateTypeString } from "../utils/intex";
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
    description: Yup.string().required("Campo obrigatório").max(100, messageValidateMaxCaracteres(100)),
    structure: Yup.string().required("Campo obrigatório").max(50, messageValidateMaxCaracteres(50)),
    id_parent_menu: Yup.number().nullable(),
    path_page: Yup.string().max(250, messageValidateMaxCaracteres(250)).nullable(),
    icon: Yup.string().max(250, messageValidateMaxCaracteres(250)),
  });

  private async validateData(data: MenuDTO) {
    try {
      await this.schemaValidate.validate(data, {
        abortEarly: false,
      });
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = [];
        err.inner.forEach((error) => {
          validationErrors.push(` ${error.path}: ${error.message}`);
        });

        this.errors = validationErrors;
      } else {
      }
      return false;
    }
  }

  async getAll(): Promise<Menu[]> {
    const listMenus = await this.menusRepository.getAll();

    return listMenus;
  }

  async getMenuByStructure(structure: string): Promise<Menu> {
    const menu = await this.menusRepository.getMenuByStructure(structure);

    return menu;
  }

  async getMenuByPathPage(pathPage: string): Promise<Menu> {
    const menu = await this.menusRepository.getMenuByPathPage(pathPage);

    return menu;
  }

  async save(menu: MenuDTO): Promise<void> {
    const dataIsValid = await this.validateData(menu);

    if (!dataIsValid) {
      throw new ErrorCustom({
        message: String(this.errors),
        name: "DataRequestInvalid",
      });
    }

    await this.verifyMenuAlreadyExists(menu);

    await this.menusRepository.save(menu);
  }

  async verifyMenuAlreadyExists(menuRequest: MenuDTO): Promise<void> {
    let menuAlreadyExists;

    menuAlreadyExists = await this.getMenuByStructure(menuRequest.structure);
    if (menuAlreadyExists) {
      throw new ErrorCustom({
        message: "Já existe menu com essa estrutura, verifique",
        name: "DataInformationReplicated",
      });
    }

    menuAlreadyExists = await this.getMenuByPathPage(menuRequest.path_page);
    if (menuAlreadyExists) {
      throw new ErrorCustom({
        message: "Já existe menu com esse path, verifique",
        name: "DataInformationReplicated",
      });
    }
  }
}
