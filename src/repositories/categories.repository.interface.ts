import { CreateCategoryInterface } from "../interfaces/createCategory.interface";

interface ICategoriesRepository {
  save(data: CreateCategoryInterface): Promise<void>;
}

export { ICategoriesRepository };
