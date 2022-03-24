import { NextFunction, Request, Response } from "express";

interface ErrorMiddlewareInterface extends Error {
  statusCode: number;
}

const errorMidleware = (err: ErrorMiddlewareInterface, request: Request, response: Response, next: NextFunction) => {
  return response.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};

export { errorMidleware };
