import { Router } from "express";
import { UsersController } from "../controllers/users.contoller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();
const userController = new UsersController();

usersRoutes.post("/", ensureAuthenticated, userController.createUser);

usersRoutes.post("/bindCompany", userController.bindUserWithCompany);

usersRoutes.post("/authenticate", userController.authenticate);

export { usersRoutes };
