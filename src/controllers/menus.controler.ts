import { Request, Response } from "express";
import { container } from "tsyringe";
import { MenuDTO } from "../interfaces/menus.DTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { MenusService } from "../services/menus.service";

class MenuController {
  async save(req: Request, res: Response): Promise<Response> {
    const data: MenuDTO = req.body;

    const companyService = container.resolve(MenusService);

    try {
      await companyService.save(data);

      return res.status(201).send({
        success: true,
        message: "Menu salvo com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export { MenuController };
