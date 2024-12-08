import { db } from '@/lib/db';

export const getAllBooking = async () => {
  try {
    const bookings = await db.booking.findMany();

    return bookings;
  } catch {
    return null;
  }
};
