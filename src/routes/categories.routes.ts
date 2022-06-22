import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const categoriesController = new CategoryController();

categoriesRoutes.post("/", ensureAuthenticated, categoriesController.createCategory);

export { categoriesRoutes };
