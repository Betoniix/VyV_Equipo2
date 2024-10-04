import { UserCredential } from '../dto/user-credentials';
import { UserData } from '../dto/user-data';

export interface IUser {
  FindCredentials(user: UserData): Promise<UserCredential | null>;
}
