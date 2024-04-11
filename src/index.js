import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App , { loader as rootLoader } from './pages/App';
import Meny from './pages/Meny';
import Date from './pages/Date';
import LandingPage from './pages/landingPage'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    loader: rootLoader,
    children : 
    [
      {
        loader: rootLoader,
        path: '',
        element: <LandingPage />
      },
      {
        loader: rootLoader,
        path: 'meny',
        element: <Meny />
      },
      {
        loader: rootLoader,
        path: 'dato',
        element: <Date />
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