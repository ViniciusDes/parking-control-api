import { Category } from "../entities/Category";
import { CategoryDTO } from "../interfaces/categoryDTO.interface";

interface ICategoriesService {
  create(data: CategoryDTO): Promise<void>;

  getCategories(description?: string): Promise<Array<Category>>;
}

export { ICategoriesService };
