import { generate } from "generate-password";
import { LenderCache } from "../../../util/cache/lender-cache";
import { IUser } from "../interface/IUser";

export class ReSendCredentials {
  constructor(private readonly userRepo: IUser) {}

  async ResendCredentials(studentID: string) {
    const cache = LenderCache.instance;
    const account = await this.userRepo.GetOne(studentID);

    if (account === null) throw new Error("Any account was found");

    const password = generate({
      length: 8,
      numbers: true,
      uppercase: true,
      lowercase: true,
    });

    const updatedAccount = await this.userRepo.UpdatePassword({
      id: account!.id,
      password: password,
    });

    if (!updatedAccount)
      throw new Error("Something went wrong updating account");

    cache.PushEmailData = {
      name: account.name,
      password: password,
      to: account.email,
    };
  }
}
