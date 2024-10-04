import { IStudent } from "../interface/IStudent";

export class DeleteLenderAccount {
  constructor(private readonly userRepo: IStudent) {}

  async DeleteAccounts(accounts: number[]) {
    const wasDeleted = await this.userRepo.Delete(accounts);
    return wasDeleted;
  }
}
