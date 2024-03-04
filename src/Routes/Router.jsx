import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import News from "../Pages/News/News";
import Business from "../Pages/Business/Business";

export const router = createBrowserRouter([
    {
           path: "/",
           element: <Main></Main>,
      children: [
        {
             path: '/',
             element:<Home></Home>
         },
        {
          path: 'about',
          element:<About></About>
        },
        {
          path: 'news',
          element:<News></News>
        },
        {
          path: 'business',
          element:<Business></Business>
        }

      ]
    },
  ]);