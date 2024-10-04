import { UserRepository } from "./repository/user-repository";
import { LoginController } from "./login-controller";
import { AdminRepository } from "./repository/admin-repository";
import { PersonalFactory } from "./personal-factory";
import { LendersRepository } from "./repository/lender-repository";
import client from "../../util/prisma-client";
import { Roles } from "../../util/roles";
import { AuthUser } from "../domain/usecase/auth-user";

const personalFactory = new PersonalFactory();
personalFactory.add(Roles.ADMIN, new AdminRepository(client.admins));
personalFactory.add(Roles.LENDER, new LendersRepository(client.lenders));

const userRepo = new UserRepository(client.users, personalFactory);
export const controller = new LoginController(new AuthUser(userRepo));
