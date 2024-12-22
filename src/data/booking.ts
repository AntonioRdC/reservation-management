'use server';

import { db } from '@/lib/db';
import { Booking } from '@prisma/client';

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

export const updateStatusBooking = async (
  id: string,
  status: Booking['status'],
) => {
  try {
    const booking = await db.booking.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return booking;
  } catch {
    return null;
  }
};
