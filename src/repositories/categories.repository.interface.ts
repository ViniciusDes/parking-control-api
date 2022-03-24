import { Category } from "../entities/Category";
import { CreateCategoryInterface } from "../interfaces/createCategory.interface";

interface ICategoriesRepository {
  save(data: CreateCategoryInterface): Promise<void>;

  findCategoryById(id: number): Promise<Category>;
}

export { ICategoriesRepository };
