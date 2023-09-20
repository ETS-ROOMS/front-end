import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtomDownload from "../../components/buttom-download/buttomDownload";
import CalendarioSala from '../../components/calendario-sala/CalendarioSala';
import CalendarioforSala from "./CalendarioforSala";

function Agendar() {
  return (
    <main>
      <ButtomDownload />
      <CalendarioSala />
      <CalendarioforSala />
    </main>
  );
}

export default Agendar;
