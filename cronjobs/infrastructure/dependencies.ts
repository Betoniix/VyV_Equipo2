import { LenderCache } from "../../util/cache/lender-cache";
import { StudentCache } from "../../util/cache/student-cache";
import { SendLenderAccount } from "../domain/usecase/send-lender-account";
import { SendStudentAccount } from "../domain/usecase/send-student-code";
import { StudentCredentialJob } from "./student-code-job";
import { LenderRepository } from "./repository/lender-repository";
import { LenderCredentialJob } from "./lender-credential-job";
import { StudentRepository } from "./repository/student-repository";
import client from "../../util/prisma-client";
import { AttendanceRepository } from "./repository/attendance-repository";
import { CheckNonattendance } from "../domain/usecase/check-nonattendance";
import { SessionRepository } from "./repository/session-repository";
import { AttendanceCheckJob } from "./attendance-check-job";
import { ExpireCheckJob } from "./expire-check-job";
import { ExpireCheck } from "../domain/usecase/expire-check";
import { CoderRepository } from "../../invitation/infraestructure/repository/code-repository";
const lenderRepository = new LenderRepository(LenderCache.instance);
const studentRepository = new StudentRepository(
  StudentCache.instance,
  client.students
);

const attendanceRepository = new AttendanceRepository(client.attendances);
const sessionRepository = new SessionRepository(client.sessions);
const codeRepo = new CoderRepository(client.invitationcode);
const checkStudentCase = new SendStudentAccount(studentRepository);
const checkAttendanceCase = new CheckNonattendance(
  sessionRepository,
  studentRepository,
  attendanceRepository
);

const checkExpire = new ExpireCheck(codeRepo);

const emailsCase = new SendLenderAccount(lenderRepository);

export const attendanceJob = new AttendanceCheckJob(checkAttendanceCase);
export const lenderJob = new LenderCredentialJob(emailsCase);
export const studentJob = new StudentCredentialJob(checkStudentCase);
export const expireJob = new ExpireCheckJob(checkExpire);
