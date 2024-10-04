import { z } from "zod";

export const UploadHomeworkSchema = z.object({
  body: z.object({
    sessionID: z.number(),
    plates: z.string().array().min(1, "Provide atleast 1 student to upload"),
  }),
});
