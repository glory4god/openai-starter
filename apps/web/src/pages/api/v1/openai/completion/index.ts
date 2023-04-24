import openAIStarter from '@/backend/lib/openai';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method === 'POST') {
    const body = JSON.parse(req.body) as BaseAIInit;

    const completion = await openAIStarter.createCompletion(body);

    console.log(completion.data);
    return res.status(200).json({
      writer: 'gpt',
      chat: completion.data.choices[0].text,
      time: new Date(),
      id: new Date().getTime(),
    });
  }
}
