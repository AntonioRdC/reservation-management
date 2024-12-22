'use server';

import { db } from '@/lib/db';

export const getAllResources = async () => {
  try {
    const resources = await db.resource.findMany({});

    return resources;
  } catch {
    return null;
  }
};
