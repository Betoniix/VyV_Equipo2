import { z } from "zod";

export const RetrieveAccountSchema = z.object({
  params: z.object({ id: z.string() }),
});
