import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ErrorPersonalizado } from "./errores";

export const ManejadorError = (
  err: ErrorRequestHandler,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (err instanceof ErrorPersonalizado) {
    res
      .status(err.code)
      .send({ code: err.code, message: err.message, data: err.message });
    return;
  }

  res.status(500).send({
    code: 500,
    message: "Error del servidor",
    data: "El servidor no pudo procesar su peticion",
  });
};
