'use client';

import { createContext, useContext } from 'react';
import { ExtendedUser } from '@/auth/next-auth';

export const UserContext = createContext<ExtendedUser | null>(null);

export const useUser = () => {
  return useContext(UserContext);
};
