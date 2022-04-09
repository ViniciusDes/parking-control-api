import { CategoryDTO } from "../interfaces/categoryDTO.interface";

interface ICategoriesService {
  create(data: CategoryDTO): Promise<void>;
}

export { ICategoriesService };
