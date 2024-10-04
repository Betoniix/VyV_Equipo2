import { Router } from "express";
import { controller } from "./dependencies";

export const reportRouter = Router();
reportRouter.get("/", controller.GenerateReport.bind(controller));
