import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

export const useDebounce = (value: string, delay = DEFAULT_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
};
