import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const useSearchQueryParams = (...params: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const newParams = useMemo(
    () => params.map((param) => searchParams.get(param)),
    [params, searchParams]
  );

  return [newParams, setSearchParams] as const;
};
