import { CreateSessions } from "../domain/usecase/create-session";
import { SessionsController } from "./session-controller";
import { SessionRepository } from "./repository/session-repository";
import { DeleteSession } from "../domain/usecase/delete-session";
import { RetrieveSessions } from "../domain/usecase/retrieve-session";
import { UpdateSession } from "../domain/usecase/update-session";
import { UploadHomeworkSession } from "../domain/usecase/upload-homework-session";
import { HomeworkRepository } from "./repository/homework-repository";
import { StudentRepository } from "./repository/student-repository";
import client from "../../util/prisma-client";

const sessionRepo = new SessionRepository(client.sessions);
const homeworkRepo = new HomeworkRepository(client.homeworks);
const studentRepo = new StudentRepository(client.students);

const createCase = new CreateSessions(sessionRepo);
const deleteCase = new DeleteSession(sessionRepo);
const retrieveCase = new RetrieveSessions(sessionRepo);
const updateCase = new UpdateSession(sessionRepo);
const homeworkCase = new UploadHomeworkSession(homeworkRepo, studentRepo);

export const controller = new SessionsController(
  createCase,
  deleteCase,
  retrieveCase,
  updateCase,
  homeworkCase
);
