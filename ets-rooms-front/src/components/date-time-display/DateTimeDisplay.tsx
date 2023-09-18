import React from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function DateTimeDisplay() {
  const currentDate = new Date();
  const formatDate = format(currentDate, "d 'de' MMMM", { locale: ptBR });

  return (
    <div>
      <h1 className="text-2xl font-bold">Resumo de hoje, {formatDate}</h1>
    </div>
  );
}
