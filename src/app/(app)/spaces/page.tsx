import { Metadata } from 'next';
import SpacesForm from '@/app/(app)/spaces/(components)/spaces-form';
import { getAllSpaces } from '@/data/get-spaces';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Spaces',
  description: 'Spaces for reservation.',
};

export default async function SpacesPage() {
  const spaces = await getAllSpaces();

  if (spaces === null) redirect('/dashboard');

  return <SpacesForm spaces={spaces} />;
}
