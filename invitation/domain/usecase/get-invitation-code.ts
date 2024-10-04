import { ICode } from "../interface/ICode";

export class GetInvitationCode {
  constructor(private readonly codeRepo: ICode) {}

  async Get() {
    const invitation = await this.codeRepo.Get();
    return invitation;
  }
}
