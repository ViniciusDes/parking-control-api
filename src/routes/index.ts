import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { companiesRoutes } from "./companies.routes";
import { permissionsRoutes } from "./permissions.routes";
import { usersRoutes } from "./users.routes";
import { vacancyManagementRoutes } from "./vacancyManegement.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);

routes.use(vacancyManagementRoutes);

routes.use("/companies", companiesRoutes);

routes.use("/users", usersRoutes);

routes.use("/permissions", permissionsRoutes);

export { routes };
