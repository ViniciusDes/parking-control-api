import { container } from "tsyringe";
import { CategoriesRepositoryInterface } from "../../repositories/categories.repository.interface";
import { CategoriesRepository } from "../../repositories/categories.repository";
import { IVacancyManagementRepository } from "../../repositories/vacancyManagement.interface";
import { VacancyManagementRepository } from "../../repositories/vacancyManagement.repository";
import { CompaniesRepository } from "../../repositories/companies.respository";
import { CompaniesRepositoryInterface } from "../../repositories/companies.repository.interface";
import { UsersRepositoryInterface } from "../../repositories/users.respository.interface";
import { UsersRepository } from "../../repositories/users.respository";

container.registerSingleton<CategoriesRepositoryInterface>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<IVacancyManagementRepository>("VacancyManagementRepository", VacancyManagementRepository);

container.registerSingleton<CompaniesRepositoryInterface>("CompaniesRepository", CompaniesRepository);

container.registerSingleton<UsersRepositoryInterface>("UsersRepository", UsersRepository);
