import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategory";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../categories.repository.interface";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async save({
    description,
    value_hour,
    value_additional,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      DESCRIPTION: description,
      VALUE_HOUR: value_hour,
      VALUE_ADDITIONAL: value_additional,
    });

    await this.repository.save(category);
  }
}

export { CategoriesRepository };
