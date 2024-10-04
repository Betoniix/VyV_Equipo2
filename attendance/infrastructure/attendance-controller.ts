import { Request, Response } from "express";
import { RetrieveSessionData } from "../domain/usecase/retrieve-session-data";
import { RetrieveStudentData } from "../domain/usecase/retrieve-student-data";
import { StudentAttendance } from "../domain/usecase/student-attendance";
import { QRData } from "../domain/dto/qr-data";
import { Attendance } from "../domain/dto/attendance";

export class AttendanceController {
  constructor(
    private readonly attendanceCase: StudentAttendance,
    private readonly studentCase: RetrieveStudentData,
    private readonly sessionCase: RetrieveSessionData
  ) {}

  async RetrieveStudent(req: Request, res: Response) {
    try {
      const qrData: QRData = req.params as QRData;
      const student = await this.studentCase.RetrieveStudent(qrData);
      res.send({ data: student });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Unable to retrieve student data" });
    }
  }

  async RetrieveSession(_: Request, res: Response) {
    try {
      const session = await this.sessionCase.RetrieveSession();
      res.send({ data: session });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Unable to retrieve current session" });
    }
  }

  async RegisterAttendance(req: Request, res: Response) {
    try {
      const attendance: Attendance = req.body as Attendance;
      const registered = await this.attendanceCase.Register(attendance);
      res.send({ data: registered });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Unable to register student attendance" });
    }
  }
}
