import * as z from 'zod';

export const SpacesFormSchema = z.object({
  space: z.string(),
});
