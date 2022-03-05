import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

const categoriesRoutes = Router();

const categoriesController = new CategoryController();

categoriesRoutes.post("/", categoriesController.createCategory);

export { categoriesRoutes };
