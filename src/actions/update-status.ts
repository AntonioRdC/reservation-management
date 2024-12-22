'use server';

import { ExtendedUser } from '@/auth/next-auth';
import { updateStatusBooking } from '@/data/booking';
import { BookingData } from '@/app/(app)/types';

export const confirmedBooking = async (
  user: ExtendedUser | undefined,
  id: string,
) => {
  if (user?.role === 'ADMIN') {
    return await updateStatusBooking(id, 'CONFIRMED');
  }
};

export const cancelledBooking = async (
  user: ExtendedUser | undefined,
  id: string,
) => {
  if (user?.role === 'ADMIN') {
    return await updateStatusBooking(id, 'CANCELLED');
  }
};
