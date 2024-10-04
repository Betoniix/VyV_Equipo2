import { z } from "zod";

export const DeleteSessionsSchema = z.object({
  body: z.object({
    ids: z.number().array(),
  }),
});
