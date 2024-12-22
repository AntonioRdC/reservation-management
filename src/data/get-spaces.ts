'use server';

import { db } from '@/lib/db';

export const getAllSpaces = async () => {
  try {
    const spaces = await db.space.findMany({});

    return spaces;
  } catch {
    return null;
  }
};

export const getSpaceById = async (id: string) => {
  try {
    const space = await db.space.findUnique({ where: { id } });

    return space;
  } catch {
    return null;
  }
};
