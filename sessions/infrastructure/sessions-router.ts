import { Router } from "express";
import { SchemaValidator } from "../../util/schema-validator";
import { CreateSessionSchema } from "./middleware/create-session-schema";
import { controller } from "./dependencies";
import { GetOneSchema } from "./middleware/get-one-session-schema";
import { DeleteSessionsSchema } from "./middleware/delete-sessions-schema";
import { UploadHomeworkSchema } from "./middleware/upload-homework-schema";
import { UpdateSessionSchema } from "./middleware/update-session-schema";

export const sessionRouter = Router();

sessionRouter.get("/", controller.GetAll.bind(controller));

sessionRouter.get(
  "/:id",
  SchemaValidator(GetOneSchema),
  controller.GetOne.bind(controller)
);

sessionRouter.post(
  "/create",
  SchemaValidator(CreateSessionSchema),
  controller.CreateSession.bind(controller)
);

sessionRouter.put(
  "/update",
  SchemaValidator(UpdateSessionSchema),
  controller.Update.bind(controller)
);

sessionRouter.post(
  "/delete",
  SchemaValidator(DeleteSessionsSchema),
  controller.Delete.bind(controller)
);

sessionRouter.post(
  "/homework",
  SchemaValidator(UploadHomeworkSchema),
  controller.Upload.bind(controller)
);
