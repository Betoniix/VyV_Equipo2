import { z } from "zod";

export const UpdateSessionSchema = z.object({
  body: z.object({
    id: z.number(),
    name: z.string(),
    date: z.string().datetime(),
    startTime: z.string().datetime(),
    endTime: z.string().datetime(),
  }),
});
