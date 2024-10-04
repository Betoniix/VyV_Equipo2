export interface IPersonal {
  FindIDByUserID(userID: string): Promise<number>;
}
