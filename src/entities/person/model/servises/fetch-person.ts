import { api } from 'shared/api/api';

import { Person } from '../types/person.types';

export const fetchPerson = async (personId: IdNumber) => {
  try {
    const { data, status } = await api.get<Person>(`people/${personId}`);

    if (status === 200) {
      return data;
    }

    return Promise.reject();
  } catch (error) {
    return Promise.reject();
  }
};
