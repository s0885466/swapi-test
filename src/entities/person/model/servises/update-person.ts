import { sleep } from 'shared/model/lib/sleep/sleep';
import { Person } from 'entities/person';

export const updatePerson = async (personData: Person) => {
  await sleep(2000);

  return personData;
};
