import { Metadata } from 'next';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default async function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4"></TabsContent>
      </Tabs>
    </>
  );
}
