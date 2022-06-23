import { NextFunction, Request, Response } from "express";

module.exports = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message } = err;
  console.log("err.name", err.name);
  if (["NonExistentPartnerError", "NonExistentExecutorSpecialtyError"].includes(err.name)) {
    console.log("testeeeeeeeeeeeeeeeeeeeeeeeeee");
    return res.status(404).send({
      error: message,
    });
  } else {
    res.status(500).send({
      error: message,
    });
  }

  next();
};
