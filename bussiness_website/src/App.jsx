import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SectionNotice from "./pages/SectionNotice";
import CourtStage from "./pages/CourtStage";
import ReviewsPage from "./pages/Reviews";
import BailiffStage from "./pages/BailiffStage";
import DeptRecovery from "./pages/DeptRecovery";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "sections", element: <SectionNotice /> },
        { path: "court", element: <CourtStage /> },
        { path: "review", element: <ReviewsPage /> },
        { path: "bailiff", element: <BailiffStage /> },
        { path: "dept_recovery", element: <DeptRecovery /> },
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
