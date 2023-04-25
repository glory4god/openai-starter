const dev = process.env.NODE_ENV === 'development';
// const V1_API_ROUTES = `${
//   dev ? CLIENT_API_ROUTES.DEV : CLIENT_API_ROUTES.REAL
// }`;

const V1_API_ROUTES =
  `${dev ? 'http://localhost:3000/api' : process.env.SERVICE_API}` + '/v1';

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
  delay?: number,
) => {
  const res = await fetch(`${V1_API_ROUTES}${url}`, options);

  if (delay) await sleep(delay);

  if (!res.ok) {
    if (res.status === 500) {
      throw new Error('Request Failed!');
    }
    if (res.status === 404) {
      throw new Error('존재하지 않는 요청입니다');
    }
    // ErrorHandling status Code
    if (res.status === 406 || res.status === 405 || res.status === 401) {
      const err = await res.json();
      throw new Error(err.code);
    }
    throw new Error('Request Failed!');
    // Error handling
  }
  return (await res.json()) as T;
};

export const delayFetcher = async <T>(url: string, options?: any) => {
  const res = await fetch(`${V1_API_ROUTES}${url}`, options);
  await sleep(300);
  if (!res.ok) {
    if (res.status === 500) {
      throw new Error('Request Failed!');
    }
    if (res.status === 404) {
      throw new Error('존재하지 않는 요청입니다');
    }
    throw new Error('Request Failed!');
    // Error handling
  }
  return (await res.json()) as T;
};
