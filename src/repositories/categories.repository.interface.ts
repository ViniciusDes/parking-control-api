import { ICreateCategoryDTO } from "../dtos/ICreateCategory";

interface ICategoriesRepository {
  save(data: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository };
