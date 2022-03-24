import { getRepository, Repository } from "typeorm";
import { CreateCategoryInterface } from "../interfaces/createCategory.interface";
import { Category } from "../entities/Category";
import { ICategoriesRepository } from "./categories.repository.interface";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async save({ description, value_hour, value_additional }: CreateCategoryInterface): Promise<void> {
    const category = this.repository.create({
      description,
      value_hour,
      value_additional,
    });

    await this.repository.save(category);
  }

  async findCategoryById(id: number): Promise<Category> {
    const category = await this.repository.findOne(id);

    return category;
  }
}

export { CategoriesRepository };