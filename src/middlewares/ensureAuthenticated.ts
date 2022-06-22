import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/users.respository";
import { ErrorCustom } from "./ErrorCustom";

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  interface IPayload {
    sub: string;
  }

  if (!authHeader) {
    throw new ErrorCustom({
      statusCode: 402,
      message: "Unauthorized",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "b634e9f488eabd0e19b16f43577eed43") as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findUserById(Number(sub));

    if (!user) {
      throw new ErrorCustom({
        statusCode: 402,
        message: "Usuário não existe!",
      });
    }
    next();
  } catch (error) {
    throw new ErrorCustom({
      statusCode: 402,
      message: "Unauthorized",
    });
  }
}
