import { Category } from "../entities/Category";
import { CategoryDTO } from "../interfaces/categoryDTO.interface";

interface CategoriesRepositoryInterface {
  save(data: CategoryDTO): Promise<void>;

  findCategoryById(id: number): Promise<Category>;

  getCategories(description?: string): Promise<Array<Category>>;
}

export { CategoriesRepositoryInterface };
