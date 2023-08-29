import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleInstructor from "../circle-instructor/CircleInstructor";

export default function Instructors() {
  return (
    <Accordion style={{ boxShadow: "none", marginTop: "10px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="flex gap-5">
          <CircleInstructor color="#E552DA" names="Agatha" />
          <CircleInstructor color="#C1C7CC" names="Camila" />
          <CircleInstructor color="#000000" names="Cléber" />
          <CircleInstructor color="#FF9254" names="Croda" />
          <CircleInstructor color="#FFCF00" names="Dani" />
          <CircleInstructor color="#0096E8" names="Dona" />
          <CircleInstructor color="#00884A" names="Francis" />
          <CircleInstructor color="#ED0007" names="Ianella" />
          <CircleInstructor color="#D1E4FF" names="Isadora" />
          <CircleInstructor color="#791D73" names="Leonardo" />
          <CircleInstructor color="#00629A" names="Luca" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ display: "flex", gap: "20px" }}>
          <CircleInstructor color="#FFD9D9" names="Roberta" />
          <CircleInstructor color="#71767C" names="Vanessa" />
          <CircleInstructor color="#66B8B2" names="Wilson" />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
