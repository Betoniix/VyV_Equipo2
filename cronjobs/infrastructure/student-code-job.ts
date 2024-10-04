import cron from "node-cron";
import { SendStudentAccount } from "../domain/usecase/send-student-code";

export class StudentCredentialJob {
  constructor(private readonly studentCase: SendStudentAccount) {}

  createJob() {
    return cron.schedule("1 * * * * *", async () => {
      try {
        await this.studentCase.sendAccount();
      } catch (error) {
        console.error((error as Error).message, error as Error);
      }
    });
  }
}
