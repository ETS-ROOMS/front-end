import React from "react";

interface CardRoomsProps {
  nome_responsavel: string;
  nome_evento: string;
  descricao: string;
  hora_inicio: string | null;
  hora_fim: string | null;
}

export default function CardRooms(props: CardRoomsProps) {
  return (
    <section className="w-5/6 h-1/4 rounded bg-white p-1 flex shadow-md">
      <div className="w-2 h-full rounded-s bg-purple-800"></div>
      <div className="w-full h-full p-2 flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-medium">{props.nome_evento}</h1>
          <div className="flex">
            <p>{props.hora_inicio}</p>
            <p>-</p>
            <p>{props.hora_fim}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-normal space-y-1">
            Responsável: {props.nome_responsavel}
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-gray-700">{props.descricao}</p>
        </div>
      </div>
    </section>
  );
}
