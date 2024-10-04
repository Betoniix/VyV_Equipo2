import "dotenv/config";

export const EnvLoader = {
  PORT: process.env.PORT!,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL!,
  AUTOMATIC_EMAIL: process.env.AUTOMATIC_EMAIL!,
  EMAIL_KEY: process.env.EMAIL_KEY!,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
  ADMIN_ID: process.env.ADMIN_ID!,
  ROUNDS: Number.parseInt(process.env.ROUNDS!),
  ENV: process.env.NODE_ENV,
  SECRET: process.env.SECRET!,
};
