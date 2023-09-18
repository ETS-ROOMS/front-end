import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./pages/resume-page/ResumePage";
import Agendar from "./pages/home/Agendar";
import EditEvent from "./pages/home/EditEvent";
import { Mapa } from "./pages/mapa/Mapa";
import ModalCadInstructors from "./components/modals/modalCadInstructor";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agendar />} />
        <Route path="/resumo" Component={ResumePage} />
        <Route path="/editar" element={<EditEvent />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/modal" element={<ModalCadInstructors />} />
      </Routes>
    </BrowserRouter>
  );
}
