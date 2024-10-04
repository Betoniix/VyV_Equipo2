import { LenderAccount } from "../dto/lender-account";
import { IUser } from "../interface/IUser";

export class UpdateStudentAccountCase {
  constructor(private readonly studentRepo: IUser) {}

  async updateAccount(student: LenderAccount) {
    const wasUpdated = await this.studentRepo.Update(student);
    return wasUpdated;
  }
}
