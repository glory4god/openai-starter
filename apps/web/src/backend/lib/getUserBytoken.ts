import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export default async function getUserByToken(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = await getToken({ req, secret });
  if (token?.user?.id) {
    return { userId: token?.user.id };
  }
  return { userId: Number(token?.sub) };
}
