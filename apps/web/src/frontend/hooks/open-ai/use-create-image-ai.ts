import { useCallback, useState } from 'react';
import { fetcher } from '@/frontend/lib/apis/fetcher';

export default function useCreateImageAIInit() {
  const [createImages, setCreateImages] = useState<Chatting[]>([]);
  const [loading, setLoading] = useState(false);

  const getCreateImages = useCallback(async (query: CreateImageInit) => {
    if (!query.prompt?.length) return;
    setLoading(true);
    try {
      const res = await fetcher<Chatting>(`/openai/create-image`, {
        method: 'POST',
        body: JSON.stringify(query),
      });

      setCreateImages((prev) => [
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

  return { createImages, getCreateImages, loading };
}
