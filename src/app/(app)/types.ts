import { Booking, User, Space } from '@prisma/client';

export type BookingData = {
  booking: Booking;
  user: User;
  space: Space;
};
