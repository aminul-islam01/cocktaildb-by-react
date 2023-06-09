import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Min from './Main/Min';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Min></Min>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      },
      {
        path: "orders",
        element: <Orders></Orders>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
