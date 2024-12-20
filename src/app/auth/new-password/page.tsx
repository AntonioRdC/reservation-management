import { Metadata } from 'next';

import { NewPasswordForm } from '@/components/new-password-form';

export const metadata: Metadata = {
  title: 'New Password',
  description: 'New Password',
};

export default function NewPasswordPage() {
  return <NewPasswordForm />;
}
