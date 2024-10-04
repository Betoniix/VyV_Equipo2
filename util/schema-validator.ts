import { NextFunction, Request, Response } from "express";
import { Schema, ZodError } from "zod";
import { DatosInvalidos } from "./errores";

export const SchemaValidator =
  (schema: Schema) => async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req);
      next();
    } catch (error) {
      const issueMessages = (error as ZodError).issues.map(
        (issue) => `${issue.message} ${issue.path[issue.path.length - 1]}`
      );

      const invaliderr = new DatosInvalidos(issueMessages.join(","));
      next(invaliderr);
    }
  };
