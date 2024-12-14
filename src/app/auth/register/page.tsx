import { Metadata } from 'next';

import { RegisterForm } from '@/components/auth/register/register-form';

export const metadata: Metadata = {
  title: 'Criar Conta',
  description: 'Criar Conta',
};

export default function Register() {
  return <RegisterForm />;
}
