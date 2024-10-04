import cron from "node-cron";

import { CheckNonattendance } from "../domain/usecase/check-nonattendance";

export class AttendanceCheckJob {
  constructor(private readonly attendanceCase: CheckNonattendance) {}

  createJob() {
    return cron.schedule("1 * * * * *", async () => {
      try {
        await this.attendanceCase.Check();
      } catch (error) {
        console.error((error as Error).message, error as Error);
      }
    });
  }
}
