import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Meny from './pages/Meny';
import Date from './pages/Date';
import App from './pages/App';
import LandingPage from './pages/landingPage';
import Time from './pages/Time';
import Persons from './pages/Persons';
import Information from './pages/Information';
import Kvitering from './pages/Kvitering';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

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