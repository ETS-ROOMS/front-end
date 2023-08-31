import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ResumePage from "./pages/resume-page/ResumePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/resume" Component={ResumePage} />
      </Routes>
    </BrowserRouter>
  );
}
