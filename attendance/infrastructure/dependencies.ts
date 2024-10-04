import client from "../../util/prisma-client";
import { RetrieveSessionData } from "../domain/usecase/retrieve-session-data";
import { RetrieveStudentData } from "../domain/usecase/retrieve-student-data";
import { StudentAttendance } from "../domain/usecase/student-attendance";
import { AttendanceController } from "./attendance-controller";
import { AttendanceRepository } from "./repository/attendance-repository";
import { SessionRepository } from "./repository/session-repository";
import { StudentRepository } from "./repository/student-repository";

const studentRepo = new StudentRepository(client.students);
const attendanceRepo = new AttendanceRepository(client.attendances);
const sessionRepo = new SessionRepository(client.sessions);

const attendanceCase = new StudentAttendance(attendanceRepo);
const studentCase = new RetrieveStudentData(studentRepo);
const sessionCase = new RetrieveSessionData(sessionRepo);

export const controller = new AttendanceController(
  attendanceCase,
  studentCase,
  sessionCase
);
