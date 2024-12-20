import { Metadata } from 'next';

import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Fazer Login',
  description: 'Fazer Login',
};

export default function LoginPage() {
  return <LoginForm />;
}
