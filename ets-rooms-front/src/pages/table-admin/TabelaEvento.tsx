import React from 'react';

interface Evento {
  id_Evento: number;
  nome_responsavel: string;
  nome_sala: string;
  hora_inicio: string;
  hora_fim: string;
  data_inicio: string;
  data_fim: string;
  nome_evento: string;
  historico:string;
  local:string
}

interface EventoTabelaProps {
  eventos: Evento[];
}

const EventoTabela: React.FC<EventoTabelaProps> = ({ eventos }) => {
  return (
      <div>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider ">
              Nome
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Sala
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Horário
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Evento
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Histórico
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {eventos.map((evento) => (
            <tr key={evento.id_Evento}>
              <td className="px-6 py-4 whitespace-no-wrap ">{evento.nome_responsavel}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-gray-500">{evento.local} - {evento.nome_sala}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{evento.data_inicio} ás {evento.hora_inicio}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{evento.nome_evento}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{evento.historico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventoTabela;