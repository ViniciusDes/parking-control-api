import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryDTO } from "../interfaces/categoryDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { CategoriesService } from "../services/categories.service";

class CategoryController {
  async createCategory(req: Request, res: Response): Promise<Response> {
    const { description, value_hour, value_additional, id_company }: CategoryDTO = req.body;

    const categoriesService = container.resolve(CategoriesService);

    try {
      await categoriesService.create({
        description,
        value_hour,
        value_additional,
        id_company,
      });

      return res.status(201).send({
        success: true,
        message: "categoria criado com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export { CategoryController };
