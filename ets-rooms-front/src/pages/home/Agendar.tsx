import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtomDownload from "../../components/buttom-download/buttomDownload";
import CalendarioSala from "../../components/calendario-sala/CalendarioSala";
import CalendarioforSala from "./CalendarioforSala";

interface SalaData {
  id_sala: string;
}

function Agendar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/cad_sala/")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados da API:", error);
      });
  }, []);

  return (
    <main>
      <ButtomDownload />
      {data.length === 2 && data.map((item, index) => (
        <CalendarioSala key={index} data={item} />
      ))}
      <CalendarioforSala />
    </main>
  );
}

export default Agendar;
