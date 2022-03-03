import { Router } from "express";
import { categoriesRoutes } from "./categories";

const routes = Router();

routes.use("/categories", categoriesRoutes);

export { routes };
