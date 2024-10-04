import { Prisma } from "@prisma/client";
import { Attendance } from "../../../attendance/domain/dto/attendance";
import { IAttendance } from "../../domain/interface/IAttendance";

export class AttendanceRepository implements IAttendance {
  constructor(private readonly store: Prisma.attendancesDelegate) {}

  async create(attendance: Attendance): Promise<boolean> {
    try {
      await this.store.create({
        data: {
          done: false,
          id_session: attendance.sessionID,
          id_student: attendance.studentID,
        },
      });

      return true;
    } catch (error) {
      console.log((error as Error).message);
      return false;
    }
  }
}
