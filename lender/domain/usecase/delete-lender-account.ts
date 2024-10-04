import { IUser } from "../interface/IUser";

export class DeleteLenderAccount {
  constructor(private readonly userRepo: IUser) {}

  async DeleteAccounts(accounts: string[]) {
    const wasDeleted = await this.userRepo.Delete(accounts);
    return wasDeleted;
  }
}
