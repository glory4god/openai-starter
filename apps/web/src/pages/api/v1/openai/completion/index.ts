import openAIStarter from '@/backend/lib/openai';
import { returnCompletionMode } from '@/backend/responses/chat';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method === 'POST') {
    const body = JSON.parse(req.body) as BaseAIInit;

    const completion = await openAIStarter.createCompletion(body);

    return res.status(200).json(returnCompletionMode(completion.data));
  }
}
