import { ICreateCategoryDTO } from "../dtos/ICreateCategory";

interface ICategoriesService {
  create(data: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesService };
