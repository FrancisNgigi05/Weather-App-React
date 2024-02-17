import React, { useState } from "react";
import WeatherApp from "./WeatherApp";
import { RouterProvider, createBrowserRouter, Route, Link } from 'react-router-dom'
import LoginPage from "./Login";
import ErrorPage from "./ErrorPage";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <WeatherApp />
        },

        {
            path: "/login",
            element: <LoginPage />
        },

        {
            path: "*",
            element: <ErrorPage />
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;