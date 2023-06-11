import { Navigate, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { NotFound } from './pages/not-found';
import { Reports } from './pages/reports';
import EOQPage from './pages/EOQPage'; // Import the EOQPage component

export const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />
  },
  {
    path: 'dashboard',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Reports />
      },
      {
        path: '*',
        element: <Navigate to="/404" />
      }
    ]
  },
 {
    path: '/eoq',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <EOQPage />
      }
    ]
  },
  {
    path: '404',
    element: <NotFound />
  }
];
