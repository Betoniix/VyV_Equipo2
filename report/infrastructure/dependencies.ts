import { StudentRepository } from "./repository/student-repository";
import { LoginController } from "./report-controller";
import client from "../../util/prisma-client";
import { StudentReport } from "../domain/usecase/retrieve-report";

const studentRepo = new StudentRepository(client.students);
export const controller = new LoginController(new StudentReport(studentRepo));
