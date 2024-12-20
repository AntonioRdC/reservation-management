'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth/auth';
import { LoginFormSchema } from '@/schemas/login-form.schema';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';
import { generateVerificationToken } from '@/lib/tokens';

export const login = async (
  values: z.infer<typeof LoginFormSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = LoginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email não existe!' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: 'Email de confirmação enviado!' };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciais inválidas!' };
        default:
          return { error: 'Algo deu errado!' };
      }
    }

    throw error;
  }
};
