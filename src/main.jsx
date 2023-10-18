import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom/dist/index.js";
import Beli from "./BuyPages/Beli";
import WinRateCalculator from "./Components/WinRateCalculator";
import About from "./Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy",
    element: <Beli />,
  },
  {
    path: "/HitungWR",
    element: <WinRateCalculator />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
