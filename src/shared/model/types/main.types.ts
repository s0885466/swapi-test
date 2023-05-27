export type Maybe<T> = T | null;

export type WithPagination<T> = {
  count: number;
  next: Maybe<Url>;
  previous: Maybe<Url>;
  results: T;
};
