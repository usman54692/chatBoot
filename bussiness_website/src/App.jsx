import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SectionNotice from "./pages/SectionNotice";
import CourtStage from "./pages/CourtStage";
import ReviewsPage from "./pages/Reviews";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/sections", element: <SectionNotice /> },
        { path: "court", element: <CourtStage /> },
        { path: "review", element: <ReviewsPage /> },
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
