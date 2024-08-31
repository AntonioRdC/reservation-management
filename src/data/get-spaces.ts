import { db } from '@/lib/db';

export const getAllSpaces = async () => {
  try {
    const spaces = await db.space.findMany({});

    return spaces;
  } catch {
    return null;
  }
};
