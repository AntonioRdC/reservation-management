'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { NewPasswordFormSchema } from '@/schemas/new-password-form.schema';
import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';

export const newPassword = async (
  values: z.infer<typeof NewPasswordFormSchema>,
  token?: string | null,
) => {
  if (!token) {
    return { error: 'Token ausente!' };
  }

  const validatedFields = NewPasswordFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token inválido!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'O token expirou!' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'Email não existe!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Senha atualizada!' };
};
