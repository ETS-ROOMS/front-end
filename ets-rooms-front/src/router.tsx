import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import EditEvent from "./pages/home/EditEvent";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editar" element={<EditEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
