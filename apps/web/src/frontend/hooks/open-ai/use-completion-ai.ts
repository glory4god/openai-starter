import { useCallback, useState } from 'react';
import { fetcher } from '@/frontend/lib/apis/fetcher';

export default function useCompletionAIInit() {
  const [chattings, setChattings] = useState<Chatting[]>([]);
  const [loading, setLoading] = useState(false);

  const getChattings = useCallback(async (query: BaseAIInit) => {
    if (!query.prompt?.length) return;
    setLoading(true);

    try {
      const res = await fetcher<Chatting>(`/openai/completion`, {
        method: 'POST',
        body: JSON.stringify(query),
      });
      setChattings((prev) => [
        ...prev,
        {
          writer: 'me',
          time: new Date().toString(),
          id: new Date().getTime(),
          chat: query.prompt,
        },
        res,
      ]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return { chattings, getChattings, loading };
}
