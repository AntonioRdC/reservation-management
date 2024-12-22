import { Metadata } from 'next';

import SpacesForm from '@/app/(app)/spaces/components/spaces-form';
import { getAllSpaces } from '@/data/space';
import { getAllResources } from '@/data/resource';

export const metadata: Metadata = {
  title: 'Spaces',
  description: 'Spaces for reservation.',
};

export default async function SpacesPage() {
  const spaces = await getAllSpaces();
  const resources = await getAllResources();

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold flex items-center justify-center py-8">
        Faça sua reserva
      </h2>
      <SpacesForm spaces={spaces!} resources={resources!} />
    </div>
  );
}
