import { z } from 'zod';
import { EMAIL_FORMAT } from '../../../util/validations';

export const UserDataSchema = z.object({
  body: z.object({
    email: z.string().trim().regex(EMAIL_FORMAT),
    password: z.string().trim(),
  }),
});
