import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { companiesRoutes } from "./companies.routes";
import { groupRoutes } from "./group.routes";
import { menusRoutes } from "./menus.routes";
import { permissionsRoutes } from "./permissions.routes";
import { usersRoutes } from "./users.routes";
import { vacancyManagementRoutes } from "./vacancyManegement.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);

routes.use(vacancyManagementRoutes);

routes.use("/companies", companiesRoutes);

routes.use("/users", usersRoutes);

routes.use("/permissions", permissionsRoutes);

routes.use("/groups", groupRoutes);

routes.use("/menus", menusRoutes);

export { routes };
