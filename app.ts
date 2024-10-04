import Express from "express";
import helmet from "helmet";
import cors from "cors";

export const app = Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(helmet());

const OriginWhiteList = ["https://sat-mifi.web.app", "http://localhost:3000"];
app.use(
  cors({
    origin: OriginWhiteList,
  })
);
