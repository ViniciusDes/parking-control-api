import { NextFunction, Request, Response } from "express";

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message } = err;

  if (["NonExistentPartnerError", "NonExistentExecutorSpecialtyError"].includes(err.name)) {
    console.log("testeeeeeeeeeeeeeeeeeeeeeeeeee");
    res.status(404).send({
      error: message,
    });
  } else {
    res.status(500).send({
      error: message,
    });
  }

  next();
};
