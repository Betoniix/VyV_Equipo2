import { Router } from "express";
import { studentController } from "./dependencies";
import { SchemaValidator } from "../../util/schema-validator";
import { StudentDataSchema } from "./middleware/student-data";
import { InvitationExpire } from "./middleware/invitation-expire";

export const inscriptionRouter = Router();

inscriptionRouter.post(
  "/create",
  SchemaValidator(StudentDataSchema),
  InvitationExpire,
  studentController.RegisterNewStudentAccount.bind(studentController)
);

inscriptionRouter.get(
  "/careers",
  studentController.RetrieveAllCareers.bind(studentController)
);

inscriptionRouter.get(
  "/semesters",
  studentController.RetrieveAllSemesters.bind(studentController)
);
