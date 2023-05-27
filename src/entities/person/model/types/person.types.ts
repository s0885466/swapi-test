import { Maybe, WithPagination } from 'shared/model/types/main.types';

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: Url;
  films: Url[];
  species: Url[];
  vehicles: Url[];
  starships: Url[];
  created: DateIsoString;
  edited: DateIsoString;
  url: Url;
};

export type ResponsePeople = WithPagination<Person[]>;

export type RequestPeople = {
  page: string;
  search: Maybe<string>;
};
