import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateRequestDTO } from "../interfaces/authenticateDTO.interface";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UserDTO } from "../interfaces/userDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { UsersService } from "../services/users.service";

class UsersController {
  async createUser(req: Request, res: Response): Promise<Response> {
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

  async getUsers(req: Request, res: Response): Promise<Response> {
    const name = req.query.name ?? "";

    const usersService = container.resolve(UsersService);

    try {
      const users = await usersService.getAll(String(name));

      return res.status(201).send({
        success: true,
        message: "",
        data: users,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    console.log("id", id);

    const usersService = container.resolve(UsersService);

    try {
      const users = await usersService.getUserById(Number(id));

      return res.status(201).send({
        success: true,
        message: "",
        data: users,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async bindUserWithCompany(req: Request, res: Response): Promise<Response> {
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

  async authenticate(req: Request, res: Response): Promise<Response> {
    const data: AuthenticateRequestDTO = req.body;

    const usersService = container.resolve(UsersService);

    try {
      const tokenUser = await usersService.authenticate(data);

      return res.status(201).send({
        success: true,
        message: null,
        data: tokenUser,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 403,
        message: error.message,
      });
    }
  }
}

export { UsersController };
