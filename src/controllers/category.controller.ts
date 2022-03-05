import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryInterface } from "../interfaces/createCategory.interface";
import { CategoriesService } from "../services/categories.service";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    const {
      description,
      value_hour,
      value_additional,
    }: CreateCategoryInterface = req.body;

    const categoriesService = container.resolve(CategoriesService);

    await categoriesService.create({
      description,
      value_hour,
      value_additional,
    });

    return res.status(201).send({
      success: true,
      message: "categoria criado com sucesso",
    });
  }
}

export { CategoryController };
