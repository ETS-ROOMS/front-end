import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import PeopleIcon from "../../components-icons/PeopleIcon";
import RobotHead from "../../components-icons/RobotHead";
import DesktopIcon from "../../components-icons/DesktopIcon";
import DesktopApplication from "../../components-icons/DesktopApplication";
import InputAutocomplete from "../inputs/InputAutocomplete";
import InputPassword from "../inputs/InputPassword";
import InputDate from "../inputs/InputDate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 810,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: 559,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

const EventFormModal = ({
  showForm,
  onClose,
  handleFormSubmit,
  endTime,
  setEndTime,
  selectedDate,
}: any) => {
  const [selectedStartDate, setSelectedStartDate] = useState(selectedDate);
  const [selectedEndDate, setSelectedEndDate] = useState(selectedDate);
  const [startTime, setStartTime] = useState("7:30");

  const arredondarTempo = (time) => {
    const timeParts = time.split(":");
    const minutes = parseInt(timeParts[1]);
    const roundedMinutes = Math.ceil(minutes / 30) * 30;
    return `${timeParts[0]}:${roundedMinutes.toString().padStart(2, "0")}`;
  };

  const generateTimeOptions = () => {
    const times: string[] = [];
    for (let hour = 7; hour <= 17; hour++) {
      times.push(`${hour}:00`, `${hour}:30`);
    }
    return times;
  };

  const top100Films = [
    { label: "Aghata" },
    { label: "Camila" },
    { label: "Cléber" },
    { label: "Croda" },
    { label: "Dani" },
    { label: "Doná" },
    { label: "Francis" },
    { label: "Ianella" },
    { label: "Leonardo" },
    { label: "Luca" },
    { label: "Roberta" },
  ];

  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const handleCancelConfirmation = () => {
    setIsConfirmationDialogOpen(false);
  };

  return (
    <>
      <Modal
        open={showForm}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 border-b border-gray-400">
              <h1 className="text-2xl font-normal">Solicitar agendamento</h1>
            </div>
            <div className="w-full h-5/6 flex items-center hover:bg-yellow-300">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 hover:bg-orange-700">
                <InputSelect />
                <InputSelect />
                <InputPassword placeholder="*EDV ou senha" />
                <Input placeholder="*E-mail do responsável" />
                <Input placeholder="Descrição" />
              </div>
              <div className="w-2/4 h-[90%] hover:bg-zinc-400">
                <div className="w-full h-2/6 hoverbg-lime-600">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <p>*Início</p>
                      <InputDate sizeW=" w-2/5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <p>*Fim</p>
                      <InputDate sizeW=" w-2/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default EventFormModal;
