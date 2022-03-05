import { CreateCategoryInterface } from "../interfaces/createCategory.interface";

interface ICategoriesService {
  create(data: CreateCategoryInterface): Promise<void>;
}

export { ICategoriesService };
