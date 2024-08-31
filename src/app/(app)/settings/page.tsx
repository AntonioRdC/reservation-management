import SettingsForm from '@/app/(app)/settings/(components)/settings-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'settings of user account',
};

export default async function SettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2 container mt-3">
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      </div>
      <div className="flex items-center justify-center">
        <SettingsForm />
      </div>
    </>
  );
}
