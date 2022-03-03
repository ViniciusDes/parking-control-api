import { container } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/categories.repository.interface";
import { CategoriesRepository } from "../../repositories/implementations/categories.repository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
