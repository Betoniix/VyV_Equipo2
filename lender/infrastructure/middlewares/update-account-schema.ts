import { z } from "zod";

export const UpdateAccountSchema = z.object({
  body: z.object({
    id: z.string(),
    name: z.string().trim().min(1, "Invalid name"),
    email: z.string().trim().min(1, "Invalid email"),
  }),
});
