import { Options } from "swagger-jsdoc";

export const options: Options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SAT-MIFI API",
      version: "1.0.0",
    },
  },
  apis: ["./src/docs/*.ts"],
};
