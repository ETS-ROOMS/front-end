import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleInstructor from "../circle-instructor/CircleInstructor";

export default function AccordInstructors() {
  return (
    <Accordion style={{ boxShadow: "none", marginTop: "10px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="flex gap-5">
          <CircleInstructor colorInstructor="bg-pink-400" nameInstructor="Agatha" />
          <CircleInstructor colorInstructor="bg-gray-400" nameInstructor="Camila" />
          <CircleInstructor colorInstructor="bg-black" nameInstructor="Cléber" />
          <CircleInstructor colorInstructor="bg-orange-400" nameInstructor="Croda" />
          <CircleInstructor colorInstructor="bg-yellow-400" nameInstructor="Dani" />
          <CircleInstructor colorInstructor="bg-blue-400" nameInstructor="Dona" />
          <CircleInstructor colorInstructor="bg-green-400" nameInstructor="Francis" />
          <CircleInstructor colorInstructor="bg-red-400" nameInstructor="Ianella" />
          <CircleInstructor colorInstructor="bg-blue-100" nameInstructor="Isadora" />
          <CircleInstructor colorInstructor="bg-purple-800" nameInstructor="Leonardo" />
          <CircleInstructor colorInstructor="bg-blue-600" nameInstructor="Luca" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="flex gap-5">
          <CircleInstructor colorInstructor="bg-orange-100" nameInstructor="Roberta" />
          <CircleInstructor colorInstructor="bg-neutral-500" nameInstructor="Vanessa" />
          <CircleInstructor colorInstructor="bg-emerald-400" nameInstructor="Wilson" />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
