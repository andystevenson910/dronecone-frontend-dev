import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import TestPage0 from "./views/test/TestPage0";
import TestPage1 from "./views/test/TestPage1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestPage0 />,
  },
  {
    path: "test1",
    element: <TestPage1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
