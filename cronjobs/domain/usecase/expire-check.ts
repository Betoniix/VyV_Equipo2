import { generate } from "generate-password";
import { ICode } from "../../../invitation/domain/interface/ICode";

export class ExpireCheck {
  constructor(private readonly invitations: ICode) {}

  async Check() {
    try {
      const invitation = await this.invitations.Get();
      console.log("-- Check Invitation Expire --");
      const today = new Date();

      if (!(invitation.expire < today)) return;

      const code = generate({
        length: 10,
        numbers: true,
        uppercase: true,
        lowercase: true,
      });

      await this.invitations.Desactivate(invitation.id);
      await this.invitations.SaveCode(code);
    } catch (error) {
      console.log((error as Error).message);
    }
  }
}
