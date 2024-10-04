import { Attendance } from "../dto/attendance";
import { IAttendance } from "../interface/IAttendance";

export class StudentAttendance {
  constructor(private readonly store: IAttendance) {}

  async Register(attendance: Attendance) {
    const registered = await this.store.create(attendance);

    if (registered === null)
      throw new Error("Unable to register the attendance");

    return registered;
  }
}
