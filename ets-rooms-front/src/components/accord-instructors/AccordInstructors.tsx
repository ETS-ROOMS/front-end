import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleInstructor from "../circle-instructor/CircleInstructor";

export default function AccordInstructors() {
  return (
    <Accordion style={{ boxShadow: "none", marginTop: "1rem", marginBottom: "1rem" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="flex gap-5 flex-wrap">
          <CircleInstructor cor="#E552DA"  nome="Agatha" />
          <CircleInstructor cor="#C1C7CC  " nome="Camila" />
          <CircleInstructor cor="#000000" nome="Cléber" />
          <CircleInstructor cor="#FF9254" nome="Croda" />
          <CircleInstructor cor="#FFCF00" nome="Dani" />
          <CircleInstructor cor="#0096E8" nome="Dona" />
          <CircleInstructor cor="#00884A" nome="Francis" />
          <CircleInstructor cor="#ED0007" nome="Ianella" />
          <CircleInstructor cor="#791D73" nome="Leonardo" />
          <CircleInstructor cor="#00629A" nome="Luca" />
          <CircleInstructor cor="#FFD9D9" nome="Roberta" />
          <CircleInstructor cor="#71767C" nome="Vanessa" />
          <CircleInstructor cor="#66B8B2" nome="Wilson" />
        </Typography>
      </AccordionSummary>
    </Accordion>
  );
}
