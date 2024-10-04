import { Router } from "express";
import { controller } from "./dependencies";
import { SchemaValidator } from "../../util/schema-validator";
import { CreateAssistanceSchema } from "./middleware/create-assistance-schema";
import { RetrieveStudentSchema } from "./middleware/retrieve-student-schema";

export const attendanceRouter = Router();

attendanceRouter.get("/session", controller.RetrieveSession.bind(controller));

attendanceRouter.get(
  "/student/:encrypted",
  SchemaValidator(RetrieveStudentSchema),
  controller.RetrieveStudent.bind(controller)
);
attendanceRouter.post(
  "/create",
  SchemaValidator(CreateAssistanceSchema),
  controller.RegisterAttendance.bind(controller)
);
