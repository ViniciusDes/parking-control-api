import { container } from "tsyringe";
import { CategoriesRepositoryInterface } from "../../repositories/categories.repository.interface";
import { CategoriesRepository } from "../../repositories/categories.repository";
import { IVacancyManagementRepository } from "../../repositories/vacancyManagement.interface";
import { VacancyManagementRepository } from "../../repositories/vacancyManagement.repository";
import { CompaniesRepository } from "../../repositories/companies.respository";
import { CompaniesRepositoryInterface } from "../../repositories/companies.repository.interface";
import { UsersRepositoryInterface } from "../../repositories/users.respository.interface";
import { UsersRepository } from "../../repositories/users.respository";
import { PermissionsRepositoryInterface } from "../../repositories/permissions.repository.interface";
import { PermissionsRepository } from "../../repositories/permissions.repository";
import { UsersCompaniesReporitory } from "../../repositories/usersCompanies.repository";
import { MenusRepository } from "../../repositories/menus.repository";
import { MenusRepositoryInterface } from "../../repositories/menus.repository.interface";
import { GroupRepositoryInterface } from "../../repositories/group.repository.interface";
import { GroupRepository } from "../../repositories/group.respository";
import { GroupPermissionRepositoryInterface } from "../../repositories/groupPermisstion.repository.interface";
import { GroupPermissionRepository } from "../../repositories/groupPermisstion.repository";

container.registerSingleton<CategoriesRepositoryInterface>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<IVacancyManagementRepository>("VacancyManagementRepository", VacancyManagementRepository);

container.registerSingleton<CompaniesRepositoryInterface>("CompaniesRepository", CompaniesRepository);

container.registerSingleton<UsersRepositoryInterface>("UsersRepository", UsersRepository);

container.registerSingleton<UsersCompaniesReporitory>("UsersCompaniesReporitory", UsersCompaniesReporitory);

container.registerSingleton<PermissionsRepositoryInterface>("PermissionsRepository", PermissionsRepository);

container.registerSingleton<GroupRepositoryInterface>("GroupRepository", GroupRepository);
container.registerSingleton<GroupPermissionRepositoryInterface>(
  "GroupPermissionsRepository",
  GroupPermissionRepository
);

container.registerSingleton<MenusRepositoryInterface>("MenusRepository", MenusRepository);
