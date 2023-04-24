import { useCallback, useRef } from 'react';

function useInfiniteScroll(fetchMore: () => any) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // fetch를 하기위한 callback
        fetchMore();
      }
    });

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    lastItemRef,
  };
}

export default useInfiniteScroll;
