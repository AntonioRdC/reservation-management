import { Metadata } from 'next';

import { ResetForm } from '@/app/auth/reset/(components)/reset-form';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset Password',
};

export default function ResetPage() {
  return <ResetForm />;
}
