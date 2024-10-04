import { z } from "zod";

export const CreateAssistanceSchema = z.object({
  body: z.object({
    sessionID: z.number(),
    studentID: z.number(),
  }),
});
