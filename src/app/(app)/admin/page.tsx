import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { currentUser } from '@/lib/auth';
import DataTable from '@/app/(app)/admin/components/admin-data-table';
import { Booking, Space, User } from '@prisma/client';
import { getAllBooking } from '@/data/booking';
import { getUserById } from '@/data/user';
import { getSpaceById } from '@/data/get-spaces';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'administration app',
};

export default async function AdminPage() {
  const user = await currentUser();

  if (user?.role !== 'ADMIN') {
    redirect('/dashboard');
  }

  const bookings = await getAllBooking();

  const data = await Promise.all(
    bookings!.map(async (booking) => {
      const user = await getUserById(booking.userId);
      const space = await getSpaceById(booking.spaceId);

      return {
        booking,
        user,
        space,
      };
    }),
  );

  const filteredData = data.filter(
    (item): item is { booking: Booking; user: User; space: Space } =>
      item !== undefined,
  );

  return <DataTable data={filteredData} />;
}
