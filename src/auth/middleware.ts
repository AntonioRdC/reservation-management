import NextAuth from 'next-auth';

import authConfig from '@/auth/auth.config';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  adminRoutes,
} from '@/auth/routes';

const { auth } = NextAuth(authConfig);

export default auth(async (req): Promise<any> => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user.role;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (isAdminRoute && (!isLoggedIn || userRole !== 'ADMIN')) {
    return Response.redirect(new URL('/auth/login', nextUrl));
  }

  if (!isPublicRoute && !isLoggedIn) {
    return Response.redirect(new URL('/auth/login', nextUrl));
  }

  return null;
});

export const config = {
  matcher: ['/admin', '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
