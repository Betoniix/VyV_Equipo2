import { InvitationCode } from "../dto/invitation.code";

export interface ICode {
  SaveCode(code: string): Promise<InvitationCode>;
  Desactivate(id: number): Promise<void>;
  Get(): Promise<InvitationCode>;
}
