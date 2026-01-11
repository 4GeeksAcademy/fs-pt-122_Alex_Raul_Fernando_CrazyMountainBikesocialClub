import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not found</h1>,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/private", element: <Profile /> }
    ]
  }
]);
