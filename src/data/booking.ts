import { db } from '@/lib/db';

export const getAllBooking = async () => {
  try {
    const bookings = await db.booking.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return bookings;
  } catch {
    return null;
  }
};
