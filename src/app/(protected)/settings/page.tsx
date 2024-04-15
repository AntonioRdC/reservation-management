import SettingsForm from '@/components/auth/settings-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'settings of user account',
};

export default async function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      </div>
      <SettingsForm />
    </>
  );
}
