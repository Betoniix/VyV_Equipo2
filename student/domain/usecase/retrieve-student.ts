import { IStudent } from "../interface/IStudent";

export class RetrieveStudentCase {
  constructor(private readonly userRepo: IStudent) {}

  async RetrieveStudentData(id: number) {
    const account = await this.userRepo.GetOne(id);

    if (account === null)
      throw new Error(`Cannot find an account with ID ${id}`);

    return account;
  }

  async getAllAccounts() {
    const accounts = await this.userRepo.GetAll();

    if (accounts === null) throw new Error(`Cannot retrieve students accounts`);

    return accounts;
  }
}
