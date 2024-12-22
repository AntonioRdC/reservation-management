'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth/auth';
import { SpaceFormSchema } from '@/schemas/space-form.schema';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';
import { generateVerificationToken } from '@/lib/tokens';

export const createBooking = async (
  values: z.infer<typeof SpaceFormSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = SpaceFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields };
  }
};
