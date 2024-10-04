import { Prisma } from "@prisma/client";
import { IUser } from "../../domain/interface/IUser";
import { Roles } from "../../../util/roles";
import { randomBytes } from "crypto";
import { LenderCredentials } from "../../domain/dto/lender-credentials";
import { LenderAccount } from "../../domain/dto/lender-account";
import { CreateLender } from "../../domain/dto/create-lender";
import { UpdatePassword } from "../../domain/dto/update-password";
import bcrypt from "bcrypt";
import { EnvLoader } from "../../../util/env-loader";

export class UserRepository implements IUser {
  constructor(private userRepo: Prisma.usersDelegate) {}

  async UpdatePassword(lender: UpdatePassword): Promise<boolean> {
    try {
      const encryptedPassword = bcrypt.hashSync(
        lender.password,
        EnvLoader.ROUNDS
      );

      await this.userRepo.update({
        where: { id: lender.id },
        data: { password: encryptedPassword },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }

  async Update(lender: LenderAccount): Promise<boolean> {
    try {
      await this.userRepo.update({
        where: { id: lender.id },
        data: {
          email: lender.email,
          lenders: { update: { name: lender.name } },
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }

  async GetOne(id: string): Promise<LenderCredentials | null> {
    try {
      const lender = await this.userRepo.findFirst({
        where: { id: id },
        select: {
          id: true,
          email: true,
          password: true,
          lenders: { select: { name: true } },
        },
      });

      if (lender === null) throw new Error(`Any lender with that ID`);

      return {
        id: lender.id,
        email: lender.email,
        name: lender.lenders!.name,
        password: lender.password,
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async GetAll(): Promise<LenderAccount[] | null> {
    try {
      console.log("GET LENDERS");
      const accounts = await this.userRepo.findMany({
        where: {
          id_role: Roles.LENDER,
        },
        select: { id: true, email: true, lenders: { select: { name: true } } },
      });

      const mappedAccounts: LenderAccount[] = accounts.map((account) => {
        return {
          email: account.email,
          id: account.id,
          name: account.lenders!.name,
        };
      });

      return mappedAccounts;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async Create(lender: CreateLender): Promise<LenderAccount | null> {
    try {
      const userID = randomBytes(4).toString("base64");

      const encryptedPassword = bcrypt.hashSync(
        lender.password,
        EnvLoader.ROUNDS
      );

      const account = await this.userRepo.create({
        data: {
          id: userID,
          email: lender.email,
          password: encryptedPassword,
          id_role: Roles.LENDER,
          lenders: { create: { name: lender.name } },
        },
        include: { lenders: true },
      });

      return {
        email: account.email,
        id: account.id,
        name: account.lenders!.name,
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async Delete(usersID: string[]): Promise<boolean> {
    try {
      await this.userRepo.deleteMany({
        where: {
          id: {
            in: usersID,
          },
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }
}
