import { withAuth } from 'next-auth/middleware';

declare module 'next-auth/jwt' {
  interface JWT {
    userRole?: 'admin';
  }
}

export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }
      return !!token;
    },
  },
});

export const config = { matcher: ['/protect'] };
