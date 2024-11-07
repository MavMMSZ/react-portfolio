import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import aboutMe from './pages/aboutMe.jsx'
import contact from './pages/contact.jsx'
import portfolio from './pages/portfolio.jsx'
import resume from './pages/resume.jsx'
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <aboutMe />,
      },
      {
        path: '/contact',
        element: <contact />,
      },
      {
        path: '/portfolio',
        element: <portfolio />,
      },
      {
        path: '/resume',
        element: <resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);