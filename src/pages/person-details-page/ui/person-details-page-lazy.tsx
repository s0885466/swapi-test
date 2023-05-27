import { lazy } from 'react';

export const PersonDetailsPageLazy = lazy(
  () => import('./person-details-page')
);
