import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import { useRequest } from 'shared/model/hooks/use-request';
import { fetchPeople } from 'entities/person';
import { PersonLinkList } from 'entities/person';
import { PaginationComponent } from 'shared/ui/pagination-component/pagination-component';
import { Search } from 'shared/ui/search/search';
import { useDebounce } from 'shared/model/hooks/use-debounce';
import { useSearchQueryParams } from 'shared/model/hooks/use-search-query-params';

const NUMBER_ELEMENTS_PER_PAGE = 10;
const FIRST_PAGE = 1;
const SEARCH_PARAMS: string[] = ['page', 'search'];

export const PeoplePage = () => {
  const [[page, search], setSearchParams] = useSearchQueryParams(
    ...SEARCH_PARAMS
  );

  const [searchQuery, setSearchQuery] = useState(() => search || '');

  const [
    peopleData,
    { doRequest: requestPeople, isLoading: isLoadingPeople, error },
  ] = useRequest(fetchPeople);

  const setSearch = useCallback(
    (value: string) => {
      const nextPage = FIRST_PAGE;

      if (value) {
        setSearchParams({ page: nextPage.toString(), search: value });
      } else {
        setSearchParams({ page: nextPage.toString() });
      }
    },
    [setSearchParams]
  );

  const setPage = useCallback(
    (event: React.ChangeEvent<unknown>, nextPage: number) => {
      if (search) {
        setSearchParams({ page: nextPage.toString(), search });
      } else {
        setSearchParams({ page: nextPage.toString() });
      }
    },
    [setSearchParams]
  );

  const onChangeSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const pageCount = Math.ceil(
    (peopleData?.count ?? NUMBER_ELEMENTS_PER_PAGE) / NUMBER_ELEMENTS_PER_PAGE
  );

  const debouncedQuery = useDebounce(searchQuery);

  useEffect(() => {
    if (page) {
      requestPeople({ page, search });
    } else {
      setSearchParams({ page: FIRST_PAGE.toString() });
    }
  }, [page, search, fetch, setSearchParams]);

  useEffect(() => {
    setSearch(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <Stack padding={2}>
      <Search value={searchQuery} onChange={onChangeSearch} />
      <PaginationComponent
        page={page ? Number(page) : 1}
        count={pageCount}
        onChange={setPage}
        disabled={isLoadingPeople}
      />
      {peopleData && (
        <PersonLinkList
          people={peopleData.results}
          isLoading={isLoadingPeople}
        />
      )}
      <PaginationComponent
        page={page ? Number(page) : 1}
        count={pageCount}
        onChange={setPage}
        disabled={isLoadingPeople}
      />
    </Stack>
  );
};

export default PeoplePage;
