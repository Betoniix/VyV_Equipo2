import { CreateLender } from "../dto/create-lender";
import { LenderAccount } from "../dto/lender-account";
import { LenderCredentials } from "../dto/lender-credentials";
import { UpdatePassword } from "../dto/update-password";

export interface IUser {
  Delete(usersID: string[]): Promise<boolean>;
  GetOne(id: string): Promise<LenderCredentials | null>;
  GetAll(): Promise<LenderAccount[] | null>;
  Update(lender: LenderAccount): Promise<boolean>;
  UpdatePassword(lender: UpdatePassword): Promise<boolean>;
  Create(lender: CreateLender): Promise<LenderAccount | null>;
}
