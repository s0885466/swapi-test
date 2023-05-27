import { api } from 'shared/api/api';

import { RequestPeople, ResponsePeople } from '../types/person.types';

export const fetchPeople = async ({ page, search }: RequestPeople) => {
  const queryParams: Record<string, string> = {
    page,
  };

  if (search) {
    queryParams.search = search;
  }

  try {
    const { data, status } = await api.get<ResponsePeople>('people', {
      params: queryParams,
    });

    if (status === 200) {
      return data;
    }

    return Promise.reject();
  } catch (error) {
    return Promise.reject();
  }
};
