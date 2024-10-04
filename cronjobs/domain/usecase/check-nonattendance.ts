import { DateHandler } from "../../../util/date-handler";
import { IAttendance } from "../interface/IAttendance";
import { ISession } from "../interface/ISession";
import { IStudent } from "../interface/IStudent";

export class CheckNonattendance {
  constructor(
    private readonly sessionStore: ISession,
    private readonly studentStore: IStudent,
    private readonly attendanceStore: IAttendance
  ) {}

  async Check() {
    try {
      console.log("-- Check Attendance --");
      const today = DateHandler.Today();
      const sessions = await this.sessionStore.GetAll(today);

      if (sessions.length === 0) throw new Error("No session today");

      for (let session of sessions) {
        await this.ValidateAttendance(session.id);
        await this.sessionStore.MarkCheckSession(session.id);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  private async ValidateAttendance(sessionID: number) {
    const ids = await this.studentStore.get(sessionID);

    for (let id of ids) {
      const wasCreated = await this.attendanceStore.create({
        sessionID: sessionID,
        studentID: id,
      });

      if (!wasCreated)
        console.log(
          `Something went wrong checking nonattendance, student id ${id}`
        );
    }
  }
}
