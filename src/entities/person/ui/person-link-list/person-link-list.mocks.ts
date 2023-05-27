import { Person } from 'entities/person';

const createString = () => Math.random().toString();
const createDateIsoString = () => new Date().toISOString();

const createArrayString = (max = 10) =>
  Array.from({ length: Math.floor(Math.random() * (max + 1)) }, createString);

const createMockPerson = (): Person => ({
  name: createString(),
  height: createString(),
  mass: createString(),
  hair_color: createString(),
  skin_color: createString(),
  eye_color: createString(),
  birth_year: createString(),
  gender: createString(),
  homeworld: createString(),
  films: createArrayString(),
  species: createArrayString(),
  vehicles: createArrayString(),
  starships: createArrayString(),
  created: createDateIsoString(),
  edited: createDateIsoString(),
  url: createString(),
});

export const createMockPeople = (length: number = 10): Person[] =>
  Array.from({ length }, createMockPerson);
