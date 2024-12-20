import { Metadata } from 'next';

import { ErrorCard } from '@/components/error-card';

export const metadata: Metadata = {
  title: 'Error Auth',
  description: 'Error Auth',
};

export default function AuthErrorPage() {
  return <ErrorCard />;
}
