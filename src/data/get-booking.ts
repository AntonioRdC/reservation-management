'use server';

import { db } from '@/lib/db';

export const getBookings = async (dateIso8601: string) => {
  try {
    const bookings = await db.booking.findMany({ where: { dateIso8601 } });

    return bookings;
  } catch {
    return null;
  }
};
