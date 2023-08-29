import React from "react";

interface EventData {
  id: number;
  nome_responsavel: string;
  nome_evento: string;
  hora_inicio: string;
  hora_fim: string;
}

interface CardProps {
  eventData: EventData;
}

export default function Card(eventData) {
  return (
    <section className="w-5/6 h-1/3 rounded bg-white p-1 flex shadow-md">
      <div className="w-2 h-full rounded-s bg-purple-800"></div>
        <div className="w-full h-full p-2 flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-medium">{eventData.nome_evento}</h1>
            <p>{eventData.hora_inicio}</p>
            <p>{eventData.hora_fim}</p>
          </div>
          <div>
            <p className="text-sm font-normal space-y-1">
              Responsável: {eventData.nome_responsavel}
            </p>
          </div>
          <div className="classroom-name">
            {/* <p className="text-sm font-light text-gray-700">{item.classroom}</p> */}
          </div>
        </div>
    </section>
  );
}

