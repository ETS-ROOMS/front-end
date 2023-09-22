import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtomDownload from "../../components/buttom-download/buttomDownload";
import CalendarioSala from '../../components/calendario-sala/CalendarioSala';
import CalendarioforSala from "./CalendarioforSala";

function Agendar() {
  const [ids_salas, setIdsSalas] = useState([]); // Estado para armazenar os IDs das salas

  useEffect(() => {
    // Buscar os IDs das salas da API Django
    const fetchIdsSalas = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/salas'); // Substitua pela sua URL de busca de "id_sala"
        const idSalas = response.data.map(item => item.id_sala); // Mapeia apenas os valores de "id_sala"
        setIdsSalas(idSalas);
      } catch (error) {
        console.error('Erro ao buscar ids_salas:', error);
      }
    };

    fetchIdsSalas();
  }, []);

  return (
    <main>
      <ButtomDownload />
      <CalendarioSala ids_salas={ids_salas} /> {/* Passa os IDs das salas como prop para o componente */}
      <CalendarioforSala />
    </main>
  );
}

export default Agendar;
