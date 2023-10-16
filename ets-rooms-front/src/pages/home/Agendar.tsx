import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtomDownload from "../../components/buttom-download/buttomDownload";
import CalendarioSala from '../../components/calendario-sala/CalendarioSala';
import { API_URL } from '../../config';
import { ButtonAdmin } from '../../components/floating-buttom-admin/button';


function Agendar() {
  const [salas, setSalas] = useState({}); // { 'nome do predio': [{}, {}, {}] } array de salas dentro de cada um

  useEffect(() => {
    // Buscar os IDs das salas da API Django
    const fetchIdsSalas = async () => {
      try {
        const response = await axios.get(`${API_URL}/sala/`); // Substitua pela sua URL de busca de "id_sala"
        const _salas = {};
        for (const sala of response.data) {
          const predio = sala.predio_sala;
          if (_salas[predio]) {
            _salas[predio].push(sala);
          } else {
            _salas[predio] = [sala];
          }
        }
        setSalas(_salas);
      } catch (error) {
        console.error('Erro ao buscar ids_salas:', error);
      }
    };

    fetchIdsSalas();
  }, []);

  return (
    <main className=''>
      <h1 className='w-4/5 ml-auto mr-auto mt-8 text-2xl font-bold'>Escolha um dia e agende em qualquer sala</h1>
      <ButtomDownload />
      <div className='flex flex-col'>
        {Object.entries(salas).map(([predio, salas]) => (
          <LinhaCalendarios salas={salas} predio={predio}/>
        ))}
      </div>
    </main>
  );
}

function LinhaCalendarios({ predio, salas }) {
  return (
    <div className='flex p-8'>
      <h2 className='text-2xl font-bold p-1 flex items-center'>{predio}</h2>
      {salas.map(sala => (<CalendarioSala sala={sala} />))}
    </div>
  )
}

export default Agendar;
