import { NextFunction, Request, Response } from "express";

interface ErrorMiddlewareInterface extends Error {
  statusCode: number;
}

module.exports = (err: ErrorMiddlewareInterface, req: Request, res: Response, next: NextFunction) => {
  if (["DependecyNotFound", "ServiceHasAlreadyStarted"].includes(err.name)) {
    res.status(400).send({
      success: false,
      message: err.message,
    });
  } else {
    res.status(500).send({
      message: err.message,
    });
  }
};
