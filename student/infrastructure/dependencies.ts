import { DeleteLenderAccount } from "../domain/usecase/delete-lender-account";
import { RetrieveStudentCase } from "../domain/usecase/retrieve-student";

import { UpdateStudentCase } from "../domain/usecase/update-student-account";

import { StudentRepository } from "./repository/student-repository";
import { StudentController } from "./student-controller";
import client from "../../util/prisma-client";
import { ResendCredentials } from "../domain/usecase/resend-credentials";

const userRepo = new StudentRepository(client.students);

const deleteAccountCase = new DeleteLenderAccount(userRepo);
const getAccountsCase = new RetrieveStudentCase(userRepo);

const updateAccountCase = new UpdateStudentCase(userRepo);
const resendCredentialsCase = new ResendCredentials(userRepo);

export const controller = new StudentController(
  updateAccountCase,
  deleteAccountCase,
  getAccountsCase,
  resendCredentialsCase
);
