import { createTransport } from 'nodemailer';

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirme seu email',
    html: `<p>Clique <a href="${confirmLink}">aqui</a> para confirmar seu email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Resetar sua senha',
    html: `<p>Clique <a href="${resetLink}">aqui</a> para resetar sua senha.</p>`,
  });
};
