import { z } from "zod";

export const ResendCredentialsSchema = z.object({
  params: z.object({
    id: z.string().trim().min(1, "Invalid ID"),
  }),
});
