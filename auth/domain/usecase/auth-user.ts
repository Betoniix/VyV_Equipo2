import { UserData } from '../dto/user-data';
import { IUser } from '../interfaces/IUser';

export class AuthUser {
  constructor(private readonly userRepo: IUser) {}

  async authData(data: UserData) {
    const credentials = await this.userRepo.FindCredentials(data);
    if (credentials === null) throw new Error("User doesn't exist with those data");
    return credentials;
  }
}
