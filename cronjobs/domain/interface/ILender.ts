import { LenderData } from "../../../util/cache/lender-cache";

export interface ILender {
  GetEmails(): LenderData[];
  SetEmails(emails: LenderData[]): void;
}
