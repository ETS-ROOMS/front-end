import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agendar from "./pages/home/Agendar";
import EditEvent from "./pages/home/EditEvent";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agendar />} />
        <Route path="/editar" element={<EditEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
