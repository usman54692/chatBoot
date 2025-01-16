import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SectionNotice from "./pages/SectionNotice";
import CourtStage from "./pages/CourtStage";
import ReviewsPage from "./pages/Reviews";
import BailiffStage from "./pages/BailiffStage";
import DeptRecovery from "./pages/DeptRecovery";
import LandlordAdvice from "./pages/CutomerAreas/LandlordAdvice";
import RentProtection from "./pages/CutomerAreas/RentProtection";
import Contact from "./pages/CutomerAreas/Contact";
import About from "./pages/CutomerAreas/About";
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
        { path: "landlord", element: <LandlordAdvice /> },
        { path: "rent-protection", element: <RentProtection /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
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
