import React, { useCallback, useState } from 'react';

const DEFAULT_TAKE = 10;

const PageQueryInit = {
  skip: 0,
  take: DEFAULT_TAKE,
};

export const PagenationApiInit = {
  skip: 0,
  take: 10,
  data: [],
  lastPage: false,
};

export const usePagination = (defaultTake?: number) => {
  const [query, setQuery] = useState<PageQuery>(
    defaultTake ? { take: defaultTake, skip: 0 } : PageQueryInit,
  );

  const nextPage = useCallback(() => {
    setQuery((prev) => ({ ...prev, skip: prev.skip + prev.take }));
  }, []);

  const prevPage = useCallback(() => {}, []);

  return { query, nextPage };
};

export default usePagination;
