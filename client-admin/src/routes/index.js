import React from "react";
import {createBrowserRouter, redirect} from "react-router-dom"

import Sidebar from "../components/Sidebar";
import TableData from "../components/TableHeadFood";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import AddCategory from "../components/AddCategory";
import AddFood from "../components/AddFood";
import TableCategory from "../components/TableHeadCategory";
import EditFood from "../components/EditFood";


const router = createBrowserRouter([
    {
        // path: "/",
        element: <Sidebar/>,
        children: [
            {
                path: "/",
                element: <TableData/>
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/addcategory",
                element: <AddCategory/>
            },
            {
                path: "/addfood",
                element: <AddFood/>
            },
            {
                path: "/categories",
                element: <TableCategory/>
            },
            {
                path: "/edit/:id",
                element: <EditFood/>
            }
            
        ],
            loader: () => {
                if(!localStorage.getItem('access_token')) {
                    throw redirect('/login')
                }
                return null
            }
    },
   
    {
        path: "/login",
        element: <Login/>,
    },
])

export default router;