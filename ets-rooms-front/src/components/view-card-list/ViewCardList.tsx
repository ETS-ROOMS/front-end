import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorBoundary from "react-error-boundary";
import CardRooms from "../card-rooms/CardRooms";

interface RoomData {
  nome_responsavel: string;
  nome_evento: string;
  descricao: string;
  hora_inicio: string | null;
  hora_fim: string | null;
}

const ViewCardList = ({ namePremise }) => {
  const [roomsData, setRoomsData] = useState<RoomData[]>([]);

  useEffect(() => {
    // Fazer a solicitação GET à API Django aqui
    axios
      .get("http://127.0.0.1:8000/evento/")
      .then((response) => {
        setRoomsData(response.data.map((room) => {
          return {
            nome_responsavel: room.nome_responsavel,
            nome_evento: room.nome_evento,
            descricao: room.descricao,
            hora_inicio: room.hora_inicio,
            hora_fim: room.hora_fim,
          };
        }));
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  }, []);

  return (
    <article>
      <h1 className="w-80 h-16 text-center bg-slate-100 rounded-t-xl sticky text-2xl pt-4">
        {namePremise}
      </h1>
      <section className="w-80 h-96 rounded-b-xl bg-slate-100 flex items-center flex-col gap-5 overflow-y-scroll">
        {roomsData.map((room, index) => (
          <CardRooms
            key={index}
            nome_responsavel={room.nome_responsavel}
            nome_evento={room.nome_evento}
            descricao={room.descricao}
            hora_inicio={room.hora_inicio}
            hora_fim={room.hora_fim}
          />
        ))}
      </section>
    </article>
  );
};

export default ViewCardList;
