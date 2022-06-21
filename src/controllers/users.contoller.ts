import { Request, Response } from "express";
import { container } from "tsyringe";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UserDTO } from "../interfaces/userDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { UsersService } from "../services/users.service";

class UsersController {
  async createUser(req: Request, res: Response) {
    const data: UserDTO = req.body;

    const usersService = container.resolve(UsersService);

    try {
      await usersService.saveUser(data);

      return res.status(201).send({
        success: true,
        message: "Usuário salvo com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async bindUserWithCompany(req: Request, res: Response) {
    const data: BindUserWithCompanyDTO = req.body;

    const usersService = container.resolve(UsersService);

    try {
      await usersService.bindUserWithCompany(data);

      return res.status(201).send({
        success: true,
        message: "Usuário vinculado com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export { UsersController };
