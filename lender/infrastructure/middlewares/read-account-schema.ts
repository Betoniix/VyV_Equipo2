import { z } from "zod";

export const ReadAccountSchema = z.object({
  params: z.object({ id: z.string() }),
});
