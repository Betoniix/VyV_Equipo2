import { z } from "zod";

export const UpdateAccountSchema = z.object({
  body: z.object({
    id: z.number(),
    name: z.string(),
    fatherLastname: z.string(),
    motherLastname: z.string(),
    plate: z.string(),
    semesterID: z.number(),
    careerID: z.number(),
    email: z.string(),
  }),
});
