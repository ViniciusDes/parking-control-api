import { Router } from "express";
import { UsersController } from "../controllers/users.contoller";

const usersRoutes = Router();
const userController = new UsersController();

usersRoutes.post("/", userController.createUser);

usersRoutes.post("/bindCompany", userController.bindUserWithCompany);

export { usersRoutes };
