'use server';

import * as z from 'zod';

import { ResetFormSchema } from '@/schemas/reset-password-form.schema';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (values: z.infer<typeof ResetFormSchema>) => {
  const validatedFields = ResetFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Email inválido!' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'Email não encontrado!' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return {
    success:
      'Email de redefinição enviado!, por favor verifique sua caixa de mensagem',
  };
};
