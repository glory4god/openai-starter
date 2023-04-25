import { NextApiRequest, NextApiResponse } from 'next';

import openAIStarter from '@/backend/lib/openai';
import { returnChatCompletionMode } from '@/backend/responses/chat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method === 'POST') {
    const body = JSON.parse(req.body) as ChatAIInit;

    const completion = await openAIStarter.createChatCompletion(body);

    return res.status(200).json(returnChatCompletionMode(completion.data));
  }
}
