import { Navigate} from 'react-router-dom';
import { Layout } from './components/layout';
import { NotFound } from './pages/not-found';
import { Reports } from './pages/reports';
import EOQPage from './pages/EOQPage'; // Import the EOQPage component
import { Department } from './pages/Department';
import { Employee } from './pages/Employee';
import { Sales } from './pages/Sales'
import { Supplier } from './pages/Supplier';
import { Vendor } from './pages/Vendor';
import { Store } from './pages/Store';
import { Item } from './pages/Item';

export const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "dashboard",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Reports />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
  {
    path: "/eoq",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <EOQPage />,
      },
    ],
  },
  {
    path: "/sales",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/department",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Department />,
      },
    ],
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Employee />,
      },
    ],
  },
  {
    path: "/store",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Store />,
      },
    ],
  },
  {
    path: "/item",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Item />,
      },
    ],
  },
  {
    path: "/supplier",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Supplier />,
      },
    ],
  },
  {
    path: "/vendor",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Vendor />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
];
