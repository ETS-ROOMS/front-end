import React, { Key } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "../card/Card";

interface EventData {
  id_Evento: string; 
  nome_responsavel: string;
  nome_evento: string;
  hora_inicio: string;
  hora_fim: string;
}

export default function ViewCardList(props) {
  const [eventData, setEventData] = useState<EventData[]>([]);

  const dados = async () => {
    try {
      const response = await axios.get<EventData[]>("http://127.0.0.1:8000/evento/");
      setEventData(response.data);
    } catch (error) {
      console.error("Não foi possivel carregar os dados da API:", error);
    }
  };

  useEffect(() => {
    dados();
  }, []);

  return (
    <>
      <article>
        <h1 className="w-80 h-16 text-center bg-slate-100 rounded-t-xl sticky text-2xl pt-4">
          {props.namePremise}
        </h1>
        <section className="w-80 h-96 rounded-b-xl bg-slate-100 flex items-center flex-col gap-5 overflow-y-scroll">
          {eventData && eventData.length > 0 ? (
            eventData.map((event) => <Card key={event.id_Evento} eventData={event} />)
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </section>
      </article>
    </>
  );
}
