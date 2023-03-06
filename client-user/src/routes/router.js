import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

// import Card from "../components/Card";

const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
            path: "/detail/:id",
            element: <DetailPage/>,
        }
      ],
    }
  ]);

  export default router;