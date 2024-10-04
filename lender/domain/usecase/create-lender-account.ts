import { generate } from "generate-password";
import { IUser } from "../interface/IUser";
import { LenderData } from "../dto/lender-data";
import { LenderCache } from "../../../util/cache/lender-cache";

export class RegisterLenderAccount {
  constructor(private readonly userRepo: IUser) {}

  async CreateAccount(lenderData: LenderData) {
    const cache = LenderCache.instance;

    const password = generate({
      length: 8,
      numbers: true,
      uppercase: true,
      lowercase: true,
    });

    const lenderAccount = {
      password,
      ...lenderData,
    };

    const createdAccount = await this.userRepo.Create(lenderAccount);

    if (createdAccount === null) throw new Error("Could be duplicated emails");

    cache.PushEmailData = {
      name: createdAccount.name,
      to: createdAccount.email,
      password: password,
    };

    return { ...createdAccount };
  }
}
