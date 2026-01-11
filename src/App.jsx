import { Login } from "./front/js/pages/Login";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./front/js/routes.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App
