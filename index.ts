import { EnvLoader } from "./util/env-loader";
import { app } from "./app";
import {
  attendanceJob,
  expireJob,
  lenderJob,
  studentJob,
} from "./cronjobs/infrastructure/dependencies";
import { LoadDefaultData } from "./load-default-data";
import { LenderCache } from "./util/cache/lender-cache";
import { StudentCache } from "./util/cache/student-cache";
import client from "./util/prisma-client";
import { loginRouter } from "./auth/infrastructure/login-router";
import { lenderRouter } from "./lender/infrastructure/lender-router";
import { sessionRouter } from "./sessions/infrastructure/sessions-router";
import { inscriptionRouter } from "./inscription/infrastructure/inscription-router";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
import { options } from "./swagger-options";
import { Environments } from "./util/environments";
import { attendanceRouter } from "./attendance/infrastructure/attendance-router";
import { studentRouter } from "./student/infrastructure/student-router";
import { reportRouter } from "./report/infrastructure/report-router";
import { invitationRouter } from "./invitation/invitation-routes";
import { ManejadorError } from "./util/manejador-error";

LenderCache.instance;
StudentCache.instance;

app.use("/signin", loginRouter);
app.use("/lender", lenderRouter);
app.use("/inscription", inscriptionRouter);
app.use("/session", sessionRouter);
app.use("/attendance", attendanceRouter);
app.use("/student", studentRouter);
app.use("/report", reportRouter);
app.use("/invitation", invitationRouter);
app.use(ManejadorError);

if (EnvLoader.ENV === Environments.DEV)
  app.use("/app/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc(options)));

app.listen(EnvLoader.PORT, async () => {
  console.info(`Running on http://localhost:${EnvLoader.PORT}`);

  await LoadDefaultData();
  lenderJob.createJob().start();
  studentJob.createJob().start();
  attendanceJob.createJob().start();
  expireJob.createJob().start();
});

process.on("SIGTTIN", async () => {
  console.log("Shutdown");
  client.$disconnect();
});
