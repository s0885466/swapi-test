import { Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { PeoplePage } from 'pages/people-page';
import { PersonDetailsPage } from 'pages/person-details-page';

export const routes: RouteObject[] = [
  {
    path: '/people',
    element: (
      <Suspense fallback={<div>Loading people page...</div>}>
        <PeoplePage />
      </Suspense>
    ),
  },
  {
    path: '/people/:id',
    element: (
      <Suspense fallback={<div>Loading person details page...</div>}>
        <PersonDetailsPage />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <Navigate to="/people" />,
  },
  {
    path: '*',
    element: <div>Page 404</div>,
  },
];
