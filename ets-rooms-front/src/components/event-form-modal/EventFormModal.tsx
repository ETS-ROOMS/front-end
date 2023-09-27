import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import InputPassword from "../inputs/InputPassword";
import InputDate from "../inputs/InputDate";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import InputCheckbox from "../inputs/InputCheckbox";
import InputTimer from "../inputs/InputTimer";

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

  function generateTimeOptions() {
    const options: string[] = []; // Especifica explicitamente o tipo como string[]
    const startTime = 7 * 60 + 30; // 7:30 em minutos
    const endTime = 17 * 60; // 17:00 em minutos
    const interval = 30; // Intervalo de 30 minutos
  
    for (let minutes = startTime; minutes <= endTime; minutes += interval) {
      const hour = Math.floor(minutes / 60);
      const minute = minutes % 60;
  
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      options.push(formattedTime);
    }
  
    return options;
  }
  

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

  const top100Eventos = [
    { label: "Python" },
    { label: "Java" },
    { label: "HTML" },
    { label: "React" },
    { label: "Vue" },
    { label: "SQL" },
    { label: "Banco de dados" },
    { label: "Respbarry Pi" },
    { label: "Arduino" },
    { label: "IA" },
    { label: "C#" },
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
            <div className="w-full h-12 flex justify-between border-b">
              <h1 className="text-2xl font-normal">Solicitar agendamento</h1>
              <p className="text-2xl font-bold">{`${selectedDate.getDate()}, ${selectedDate.toLocaleString(
                "default",
                { month: "short" }
              )}`}</p>
            </div>
            <div className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4">
                <InputSelect
                  options={top100Films.map((film) => ({
                    label: film.label,
                    value: film.label,
                  }))}
                  onChange={(e) => console.log(e.target.value)}
                />
                <InputSelect
                  options={top100Eventos.map((film) => ({
                    label: film.label,
                    value: film.label,
                  }))}
                  onChange={(e) => console.log(e.target.value)}
                />
                <InputPassword placeholder="*EDV ou senha" />
                <Input placeholder="*E-mail do responsável" />
                <Input placeholder="Descrição" />
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full h-2/6">
                  <div className="flex flex-col gap-5">
                    <div className="gap-2">
                      <div className="grid grid-flow-col grid-rows-2 gap-3">
                        <div className="w-full flex items-center gap-3">
                          <p>*Início</p>
                          <InputDate
                            sizeW="w-32"
                            sizeH="h-10"
                            defaultValue={
                              selectedDate.toISOString().split("T")[0]
                            }
                            onChange={(e) =>
                              setSelectedStartDate(
                                new Date(
                                  selectedDate.getFullYear(),
                                  selectedDate.getMonth(),
                                  selectedDate.getDate(),
                                  new Date(e.target.value).getHours(),
                                  new Date(e.target.value).getMinutes()
                                )
                              )
                            }
                          />
                          <InputTimer
                            sizeW="w-24"
                            sizeH="h-10"
                            value={startTime}
                            options={generateTimeOptions()}
                            onChange={(e) =>
                              setStartTime(arredondarTempo(e.target.value))
                            }
                          />
                        </div>
                        <div className="w-full flex items-center gap-3">
                          <p className="pr-3">*Fim</p>
                          <InputDate
                            sizeW="w-32"
                            sizeH="h-10"
                            defaultValue={
                              selectedDate.toISOString().split("T")[0]
                            }
                            onChange={(e) =>
                              setSelectedEndDate(
                                new Date(
                                  selectedDate.getFullYear(),
                                  selectedDate.getMonth(),
                                  selectedDate.getDate(),
                                  new Date(e.target.value).getHours(),
                                  new Date(e.target.value).getMinutes()
                                )
                              )
                            }
                          />
                          <InputTimer
                            sizeW="w-24"
                            sizeH="h-10"
                            value={startTime}
                            options={generateTimeOptions()}
                            onChange={(e) => setStartTime(e.target.value)}
                          />
                          <p className="text-gray-400">30min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/5">
                  <InputCheckbox textCheck="Recorrente" />
                </div>
                <div className="w-full h-full flex justify-between pt-3">
                  <ButtonCancel nameButton="Cancelar" />
                  <ButtonConfirm nameButton="Cadastrar" />
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
