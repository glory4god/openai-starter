import { NextApiRequest, NextApiResponse } from 'next';

import openAIStarter from '@/backend/lib/openai';
import { returnCreateImage } from '@/backend/responses/chat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method === 'POST') {
    const body = JSON.parse(req.body) as CreateImageInit;

    const createImage = await openAIStarter.createImage(body);

    return res.status(200).json(returnCreateImage(createImage.data));
  }
}
