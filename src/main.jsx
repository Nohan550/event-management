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
import ServiceDetail from './Components/Services/ServiceDetail';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Register from './Components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Banner></Banner>
    },{
      path:'/services/:id',
      element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
      loader:() =>fetch("/event.json") 
    },
    {
      path:"/blogs",
    element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
    },
    {
      path:"/contact",
      element:<PrivateRoute><Contact></Contact></PrivateRoute>
    },
    {
      path:'/login',
       element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    }
]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
