import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Date from './pages/Date';
import Information from './pages/Information';
import Kvitering from './pages/Kvitering';
import LandingPage from './pages/landingPage';
import Meny from './pages/Meny';
import NotFoundPage from './pages/NotFoundPage';
import Persons from './pages/Persons';
import Time from './pages/Time';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children : 
    [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: 'meny',
        element: <Meny />
      },
      {
        path: 'dato',
        element: <Date />
      },
      {
        path: 'tid',
        element: <Time />
      },
      {
        path: 'personer',
        element: <Persons />
      },
      {
        path: 'informasjon',
        element: <Information />
      },
      {
        path: 'kvitering',
        element: <Kvitering />
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();