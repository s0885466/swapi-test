import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from '../model/constants/routes';

const router = createBrowserRouter(routes);

export const Router = () => <RouterProvider router={router} />;
