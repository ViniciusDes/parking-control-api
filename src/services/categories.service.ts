import { inject, injectable } from "tsyringe";
import { CreateCategoryInterface } from "../interfaces/createCategory.interface";
import { ICategoriesRepository } from "../repositories/categories.repository.interface";
import { ICategoriesService } from "./categories.service.interface";

@injectable()
class CategoriesService implements ICategoriesService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  findCategoryById = (category_id: number) => {
    if (!category_id) {
      return;
    }

    const category = this.categoriesRepository.findCategoryById(category_id);

    if (!category) {
      return;
    }

    return category;
  };

  async create(data: CreateCategoryInterface): Promise<void> {
    await this.categoriesRepository.save(data);
  }
}

export { CategoriesService };
