const dev = process.env.NODE_ENV === 'development';

const API_V1 =
  `${dev ? 'http://localhost:3000' : process.env.SERVICE_API}` + '/api/v1';

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
  delay?: number,
) => {
  const res = await fetch(`${API_V1}${url}`, options);

  if (delay) await sleep(delay);

  if (!res.ok) {
    throw new Error('Request Failed!');
    // Error handling
  }
  return (await res.json()) as T;
};

export const delayFetcher = async <T>(url: string, options?: any) => {
  const res = await fetch(`${API_V1}${url}`, options);
  await sleep(300);
  if (!res.ok) {
    throw new Error('Request Failed!');
  }
  return (await res.json()) as T;
};
