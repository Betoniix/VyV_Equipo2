import { DeleteLenderAccount } from "../domain/usecase/delete-lender-account";
import { GetLenderAccount } from "../domain/usecase/retrieve-lender-account";
import { RegisterLenderAccount } from "../domain/usecase/create-lender-account";
import { UpdateStudentAccountCase } from "../domain/usecase/update-lender-account";

import { UserRepository } from "./repository/user-repository";
import { LenderController } from "./lender-controller";
import client from "../../util/prisma-client";
import { ReSendCredentials } from "../domain/usecase/resend-credentials";

const userRepo = new UserRepository(client.users);

const deleteAccountCase = new DeleteLenderAccount(userRepo);
const getAccountsCase = new GetLenderAccount(userRepo);
const loadAccountsCase = new RegisterLenderAccount(userRepo);
const updateAccountCase = new UpdateStudentAccountCase(userRepo);
const resendCredentialsCase = new ReSendCredentials(userRepo);

export const controller = new LenderController(
  updateAccountCase,
  loadAccountsCase,
  deleteAccountCase,
  getAccountsCase,
  resendCredentialsCase
);
