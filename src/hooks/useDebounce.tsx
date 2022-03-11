import { useEffect, useState } from 'react';

interface UseDebounceProps<T> {
  value: T;
  delay: number;
}

// reference: https://usehooks.com/useDebounce/
export default function useDebounce<T>({
  value,
  delay,
}: UseDebounceProps<T>): T {
  const [debouncedTerm, setDebouncedTerm] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedTerm;
}
