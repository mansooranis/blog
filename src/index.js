import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from './components/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<NoMatch/>}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* ... etc. */}
        <Route path="notfound" element={<NoMatch />} />
      </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
