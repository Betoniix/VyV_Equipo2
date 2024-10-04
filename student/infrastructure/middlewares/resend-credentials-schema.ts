import { z } from "zod";

export const ResendCredentialsSchema = z.object({
  body: z.object({
    id: z.number(),
  }),
});
