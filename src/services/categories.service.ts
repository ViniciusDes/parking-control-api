import { inject, injectable } from "tsyringe";
import { ICreateCategoryDTO } from "../dtos/ICreateCategory";
import { ICategoriesRepository } from "../repositories/categories.repository.interface";
import { ICategoriesService } from "./categories.service.interface";

@injectable()
class CategoriesService implements ICategoriesService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async create(data: ICreateCategoryDTO): Promise<void> {
    await this.categoriesRepository.save(data);
  }
}

export { CategoriesService };
