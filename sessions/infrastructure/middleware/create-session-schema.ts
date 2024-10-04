import { z } from "zod";

export const CreateSessionSchema = z.object({
  body: z.object({
    name: z.string(),
    date: z.string().datetime(),
    startTime: z.string().datetime(),
    endTime: z.string().datetime(),
  }),
});
