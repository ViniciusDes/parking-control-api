import { inject, injectable } from "tsyringe";
import { CategoryDTO } from "../interfaces/categoryDTO.interface";
import { CategoriesRepositoryInterface } from "../repositories/categories.repository.interface";
import { ICategoriesService } from "./categories.service.interface";

@injectable()
class CategoriesService implements ICategoriesService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepositoryInterface
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

  async create(data: CategoryDTO): Promise<void> {
    await this.categoriesRepository.save(data);
  }
}

export { CategoriesService };
