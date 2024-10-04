import { Router } from "express";
import { controller } from "./dependencies";
import { CreateAccountsSchema } from "./middlewares/create-accounts-schema";
import { DeleteAccountsSchema } from "./middlewares/delete-accounts-schema";
import { UpdateAccountSchema } from "./middlewares/update-account-schema";
import { ReadAccountSchema } from "./middlewares/read-account-schema";
import { SchemaValidator } from "../../util/schema-validator";
import { ResendCredentialsSchema } from "./middlewares/resend-credentials-schema";

export const lenderRouter = Router();

lenderRouter.post(
  "/create",
  SchemaValidator(CreateAccountsSchema),
  controller.createAccount.bind(controller)
);

lenderRouter.post(
  "/delete",
  SchemaValidator(DeleteAccountsSchema),
  controller.deleteAccounts.bind(controller)
);

lenderRouter.post(
  "/resend/:id",
  SchemaValidator(ResendCredentialsSchema),
  controller.ResendData.bind(controller)
);

lenderRouter.put(
  "/update",
  SchemaValidator(UpdateAccountSchema),
  controller.updateAccount.bind(controller)
);

lenderRouter.get(
  "/account/:id",
  SchemaValidator(ReadAccountSchema),
  controller.getOneAccount.bind(controller)
);

lenderRouter.get("/accounts", controller.getAllAccount.bind(controller));
