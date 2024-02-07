// import { Rating, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
// import { useTranslation } from "react-i18next";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Layout from "./Layout/Layout";
// import FileBase64 from "react-file-base64";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
      ],
    },
  ]);



  return (
    <div className="dark:bg-[#4a4a4a] dark:text-[#FFF]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
