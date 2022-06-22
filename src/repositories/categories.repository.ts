import { getRepository, Repository } from "typeorm";
import { CategoryDTO } from "../interfaces/categoryDTO.interface";
import { Category } from "../entities/Category";
import { CategoriesRepositoryInterface } from "./categories.repository.interface";

class CategoriesRepository implements CategoriesRepositoryInterface {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async save({ description, value_hour, value_additional, id_company }: CategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      value_hour,
      value_additional,
      id_company,
    });

    await this.repository.save(category);
  }

  async findCategoryById(id: number): Promise<Category> {
    const category = await this.repository.findOne(id);

    return category;
  }
}

export { CategoriesRepository };
