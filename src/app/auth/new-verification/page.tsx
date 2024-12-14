import { Metadata } from 'next';

import { NewVerificationCard } from '@/components/auth/new-verification/new-verification-card';

export const metadata: Metadata = {
  title: 'New Verification Email',
  description: 'New Verification Email',
};

export default function NewVerificationPage() {
  return <NewVerificationCard />;
}
