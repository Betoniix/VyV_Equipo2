import { Attendance } from "../dto/attendance";

export interface IAttendance {
  create(attendance: Attendance): Promise<number | null>;
}
