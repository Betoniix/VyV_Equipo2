import { Router } from "express";
import { controller } from "./dependencies";
import { SchemaValidator } from "../../util/schema-validator";
import { UserDataSchema } from "./middleware/user-data-schema";

export const loginRouter = Router();

loginRouter.post(
  "/",
  SchemaValidator(UserDataSchema),
  controller.authenticate.bind(controller)
);
