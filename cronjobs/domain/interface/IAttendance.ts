import { Attendance } from "../../../attendance/domain/dto/attendance";

export interface IAttendance {
  create(attendance: Attendance): Promise<boolean>;
}
