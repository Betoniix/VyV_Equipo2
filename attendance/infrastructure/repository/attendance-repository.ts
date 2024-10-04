import { Prisma } from "@prisma/client";
import { Attendance } from "../../domain/dto/attendance";
import { IAttendance } from "../../domain/interface/IAttendance";

export class AttendanceRepository implements IAttendance {
  constructor(private readonly store: Prisma.attendancesDelegate) {}

  async create(attendance: Attendance): Promise<number | null> {
    try {
      const created = await this.store.create({
        data: {
          id_session: attendance.sessionID,
          id_student: attendance.studentID,
          done: true,
        },
        select: {
          id: true,
        },
      });

      return created.id;
    } catch (error) {
      console.error((error as Error).message);
      return null;
    }
  }
}
