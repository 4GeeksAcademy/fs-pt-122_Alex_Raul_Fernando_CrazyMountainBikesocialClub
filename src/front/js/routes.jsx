import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import RouteDetail from "./pages/RouteDetail.jsx";
import { About } from "./pages/About.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not found</h1>,
    children: [
      // 🟢 PÚBLICAS (sin login)
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/about", element: <About /> },
      // 🔴 PRIVADAS (con login)
      { 
        path: "/home", 
        element: <Home /> 
      },
      { 
        path: "/profile", 
        element: <Profile /> 
      },
      { 
        path: "/routes/:routeId",
        element: <RouteDetail />
      },
    ]
  }
]);
