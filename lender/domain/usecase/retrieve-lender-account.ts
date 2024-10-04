import { IUser } from "../interface/IUser";

export class GetLenderAccount {
  constructor(private readonly userRepo: IUser) {}

  async RetrieveLenderAccount(lenderID: string) {
    const account = await this.userRepo.GetOne(lenderID);

    if (account === null)
      throw new Error(`Cannot find an account with ID ${lenderID}`);

    return account;
  }

  async getAllAccounts() {
    const accounts = await this.userRepo.GetAll();

    if (accounts === null) throw new Error(`Cannot retrieve students accounts`);

    return accounts;
  }
}
