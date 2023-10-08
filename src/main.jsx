import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorPage from './ErrorPage';
import Layout from './Layout/Layout';
import Banner from './Components/Banner/Banner';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Banner></Banner>
    }
]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
