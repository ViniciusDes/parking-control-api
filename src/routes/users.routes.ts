import { Router } from "express";
import { UsersController } from "../controllers/users.contoller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();
const userController = new UsersController();

usersRoutes.get("/", ensureAuthenticated, userController.getUsers);

usersRoutes.post("/", userController.createUser);

usersRoutes.post("/bindCompany", ensureAuthenticated, userController.bindUserWithCompany);

usersRoutes.post("/authenticate", userController.authenticate);

export { usersRoutes };
