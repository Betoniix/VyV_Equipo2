import client from "../../util/prisma-client";
import { RegisterStudent } from "../domain/usecase/register-student";
import { RetrieveCareers } from "../domain/usecase/retrieve-careers";
import { RetrieveSemesters } from "../domain/usecase/retrieve-semesters";
import { CareerRepository } from "./repository/career-repository";
import { SemesterRepository } from "./repository/semester-repository";
import { StudentRepository } from "./repository/student-repository";
import { InscriptionController } from "./inscription-controller";

const studentRepo = new StudentRepository(client.students);
const semesterRepo = new SemesterRepository(client.semesters);
const careersRepo = new CareerRepository(client.careers);

const registerCase = new RegisterStudent(studentRepo);
const semesterCase = new RetrieveSemesters(semesterRepo);
const careerCase = new RetrieveCareers(careersRepo);

export const studentController = new InscriptionController(
  registerCase,
  careerCase,
  semesterCase
);
