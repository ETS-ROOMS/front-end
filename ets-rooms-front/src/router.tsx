import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./pages/resume-page/ResumePage";
import Agendar from "./pages/home/Agendar";
import EditEvent from "./pages/home/EditEvent";
import { Mapa } from "./pages/mapa/Mapa";
import ModalCadInstructors from "./components/modals/modalCadInstructor";
import ModalCadRoom from "./components/modals/modalCadRoom";
import ModalEditAgendamento from "./components/modals/modalEditAgendamento";
import ModalExcluir from "./components/modals/modalExcluir";
import DeleteAlert from "./components/modals/alerts/DeleteAlert";
import Login from "./components/login-admin/Login";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Agendar} />
        <Route path="/resumo" Component={ResumePage} />
        <Route path="/editar" Component={EditEvent} />
        <Route path="/painel" Component={Login} />
        <Route path="/mapa" Component={Mapa} />
        <Route path="/modal" Component={ModalCadInstructors} />
        <Route path="/modal2" Component={ModalCadRoom} />
        <Route path="/modal3" Component={ModalEditAgendamento} />
        
      </Routes>
    </BrowserRouter>
  );
}
