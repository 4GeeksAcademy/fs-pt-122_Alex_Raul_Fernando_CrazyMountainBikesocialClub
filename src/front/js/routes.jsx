import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Private } from "./pages/Private.jsx";
import { About } from "./pages/About.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not found</h1>,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/private", element: <Private /> },
      { path: "/about", element: <About /> }
    ]
  }
]);
