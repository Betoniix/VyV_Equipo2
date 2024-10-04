import { Router } from "express";
import { controller } from "./dependencies";
import { SchemaValidator } from "../util/schema-validator";
import { InvitationDataSchema } from "./infraestructure/middleware/invitation-data";

export const invitationRouter = Router();

invitationRouter.get("/", controller.GetInvitationCode.bind(controller));

invitationRouter.post(
  "/create",
  SchemaValidator(InvitationDataSchema),
  controller.GenerateInvitationCode.bind(controller)
);
