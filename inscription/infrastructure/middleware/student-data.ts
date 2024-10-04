import { z } from "zod";

export const StudentDataSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "Empty name"),
    fatherLastname: z.string().trim().min(1, "Empty father last name"),
    motherLastname: z.string().trim().min(1, "Empty mother last name"),
    email: z.string().trim().min(1, "Empty email"),
    plate: z.string().trim().min(1, "Empty plate"),
    semester: z.number(),
    career: z.number(),
    invitation: z.string().min(1, "Empty invitation"),
  }),
});
