import { Router } from "express";
import { controller } from "./dependencies";
import { DeleteAccountsSchema } from "./middlewares/delete-accounts-schema";
import { UpdateAccountSchema } from "./middlewares/update-account-schema";
import { RetrieveAccountSchema } from "./middlewares/retrieve-account-schema";
import { SchemaValidator } from "../../util/schema-validator";
import { ResendCredentialsSchema } from "./middlewares/resend-credentials-schema";

export const studentRouter = Router();

studentRouter.post(
  "/delete",
  SchemaValidator(DeleteAccountsSchema),
  controller.deleteAccounts.bind(controller)
);

studentRouter.post(
  "/resend",
  SchemaValidator(ResendCredentialsSchema),
  controller.ResendData.bind(controller)
);

studentRouter.put(
  "/update",
  SchemaValidator(UpdateAccountSchema),
  controller.updateAccount.bind(controller)
);

studentRouter.get(
  "/account/:id",
  SchemaValidator(RetrieveAccountSchema),
  controller.getOneAccount.bind(controller)
);

studentRouter.get("/accounts", controller.getAllAccount.bind(controller));
