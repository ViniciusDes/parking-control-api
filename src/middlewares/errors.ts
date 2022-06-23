import { NextFunction, Request, Response } from "express";

interface ErrorMiddlewareInterface extends Error {
  statusCode: number;
}

module.exports = (err: ErrorMiddlewareInterface, req: Request, res: Response, next: NextFunction) => {
  console.log("asdas", err.message, err.name);
  if (["DependecyNotFound"].includes(err.name)) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  } else {
    res.status(500).send({
      error: err.message,
    });
  }
};
