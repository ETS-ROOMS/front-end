import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleInstructor from "../circle-instructor/CircleInstructor";

interface Instructor {
  nome: string;
  edv: string;
  email: string;
  cor: string;
  materias: string;
}

export default function AccordInstructors() {
  const [existingInstructors, setExistingInstructors] = useState<Instructor[]>([]);
  const [existingColors, setExistingColors] = useState<string[]>([]);

    useEffect(() => {
    // Fazer a solicitação GET à API Django aqui
    axios
      .get(`${API_URL}/cad_instrutor/`)
      .then((response) => {
        const instructors = response.data.results.map((instructor) => {
          return {
            cor: instructor.cor,
            nome: instructor.nome,
          };
        });

        const colors = instructors.map((instructor) => instructor.cor);

        setExistingInstructors(instructors);
        setExistingColors(colors);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  }, []);
  return (
    <Accordion
      style={{ boxShadow: "none", marginTop: "1rem", marginBottom: "1rem" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="flex gap-5 flex-wrap">
          {existingInstructors.map((instructor, index) => (
            <CircleInstructor
              key={index}
              cor={instructor.cor}
              nome={instructor.nome}
            />
          ))}
        </Typography>
      </AccordionSummary>
    </Accordion>
  );
}
