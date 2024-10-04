import { Prisma } from "@prisma/client";
import { PersonalFactory } from "../personal-factory";
import { IUser } from "../../domain/interfaces/IUser";
import { UserData } from "../../domain/dto/user-data";
import { UserCredential } from "../../domain/dto/user-credentials";
import { jwtGenerator } from "../../../util/jwt/token-generator";
import { compareSync } from "bcrypt";

export class UserRepository implements IUser {
  constructor(
    private readonly store: Prisma.usersDelegate,
    private readonly personal: PersonalFactory
  ) {}

  async FindCredentials(data: UserData): Promise<UserCredential | null> {
    try {
      const user = await this.FindUserAccount(data);

      if (user === null) throw new Error("Invalid email or password");

      if (!compareSync(data.password, user.password))
        throw new Error("Invalid Password");

      const personalRepo = this.personal.make(user.id_role);
      const personalID = await personalRepo.FindIDByUserID(user.id);

      const access_token = jwtGenerator({ role: user.id_role }, {});

      return {
        roleId: user.id_role,
        access: access_token,
        id: personalID,
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  private async FindUserAccount(data: UserData) {
    const user = await this.store.findFirst({
      where: { email: data.email },
      select: { id: true, id_role: true, password: true },
    });
    return user;
  }
}
