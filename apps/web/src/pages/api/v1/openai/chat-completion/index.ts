import openAIStarter from '@/backend/lib/openai';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method === 'POST') {
    const body = JSON.parse(req.body) as ChatAIInit;

    const completion = await openAIStarter.createChatCompletion(body);

    return res.status(200).json({
      writer: completion.data.choices[0].message?.role,
      chat: completion.data.choices[0].message?.content,
      time: new Date(),
      id: new Date().getTime(),
    });
  }
}
