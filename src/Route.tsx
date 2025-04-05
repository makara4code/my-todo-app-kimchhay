import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.tsx'));
const Completed = lazy(() => import('./pages/Completed.tsx'));

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/completed', element: <Completed /> },
];
