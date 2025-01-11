import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        // { path: "about", element: <About /> },
        // { path: "contact", element: <Contact /> },
      ],
    },
  ]);


  return (
    <>

        <RouterProvider  router={router}/>
    </>
  );
}

export default App;
