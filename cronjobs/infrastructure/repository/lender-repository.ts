import { LenderCache, LenderData } from "../../../util/cache/lender-cache";
import { ILender } from "../../domain/interface/ILender";

export class LenderRepository implements ILender {
  constructor(private readonly cache: LenderCache) {}

  GetEmails(): LenderData[] {
    return this.cache.LenderEmailList;
  }

  SetEmails(emails: LenderData[]): void {
    emails.forEach((email) => {
      this.cache.PushEmailData = email;
    });
  }
}
