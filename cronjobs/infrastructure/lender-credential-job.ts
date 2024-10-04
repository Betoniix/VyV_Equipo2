import cron from "node-cron";
import { SendLenderAccount } from "../domain/usecase/send-lender-account";

export class LenderCredentialJob {
  constructor(private readonly emailsCase: SendLenderAccount) {}

  createJob() {
    return cron.schedule("1 * * * * *", async () => {
      try {
        await this.emailsCase.sendAccount();
      } catch (error) {
        console.error((error as Error).message, error as Error);
      }
    });
  }
}
