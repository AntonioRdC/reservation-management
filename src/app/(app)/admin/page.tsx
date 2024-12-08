import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { currentUser } from '@/lib/auth';
import DataTable from '@/app/(app)/admin/(components)/data-table';
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

  let bookings = await getAllBooking();

  if (bookings === null) redirect('/dashboard');

  const data = await Promise.all(
    bookings.map(async (booking) => {
      const user = await getUserById(booking.userId);
      const space = await getSpaceById(booking.spaceId);

      if (user === null || space === null) redirect('/dashboard');

      return {
        name: user.name,
        email: user.email,
        user_image: user.image,
        space: space.name,
        capacity: space.capacity,
        space_description: space.description,
        startTime: booking.startTime,
        endTime: booking.endTime,
        booking_image: booking.image,
        category: booking.category,
        status: booking.status,
      };
    }),
  );

  return <DataTable data={data} />;
}
