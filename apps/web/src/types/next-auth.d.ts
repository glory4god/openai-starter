import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id?: number | null;
      accessToken?: string | null;
      name?: number | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
declare module 'next-auth/jwt' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT {
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    sub?: string;
    user?: {
      id: number;
    };
  }
}
