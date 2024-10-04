import cron from "node-cron";

import { ExpireCheck } from "../domain/usecase/expire-check";

export class ExpireCheckJob {
  constructor(private readonly expire: ExpireCheck) {}

  createJob() {
    return cron.schedule("1 * * * * *", async () => {
      try {
        await this.expire.Check();
      } catch (error) {
        console.error((error as Error).message, error as Error);
      }
    });
  }
}
