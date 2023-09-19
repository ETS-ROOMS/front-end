import React, { useEffect, useState } from "react";
import ButtomDownload from "../../components/buttom-download/buttomDownload";
import axios from 'axios';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import "react-calendar/dist/Calendar.css";
import Calendar from 'react-calendar';
import { Modal, Button, TextField, Select, MenuItem, Grid, InputLabel, Autocomplete } from '@mui/material';
import DetalheEvento from "../../components/detalhe-evento/detalheEvento";
import { ButtonAdmin } from "../../components/floating-buttom-admin/button";


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


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: 24,
    padding: 20,
  };

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

  return (
    <Modal
      open={showForm}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={style as any}>
        <h2>AGENDAR EVENTO EM {selectedDate.toLocaleDateString()}</h2>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Nome do Responsável" name="NomeResponsavel" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ marginTop: "16px" }}>* Início</InputLabel>
              <TextField
                type="date"
                name="datainicio"
                defaultValue={selectedDate.toISOString().split("T")[0]}
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
                fullWidth
                InputLabelProps={{ shrink: true }}
                className="aligned-input"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ marginTop: "16px" }}>* Fim</InputLabel>
              <TextField
                type="date"
                name="datafim"
                defaultValue=""
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
                fullWidth
                InputLabelProps={{ shrink: true }}
                className="aligned-input" 
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel htmlFor="start-input">* Horário de início</InputLabel>
              <Select
                id="start-input"
                name="startTime"
                value={startTime}
                required
                onChange={(e) => setStartTime(arredondarTempo(e.target.value))}
                fullWidth
                className="aligned-input"
              >
                {generateTimeOptions().map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel htmlFor="end-input">* Horário de término</InputLabel>
              <Select
                id="end-input"
                name="endTime"
                value={endTime}
                required
                onChange={(e) => setEndTime(arredondarTempo(e.target.value))}
                fullWidth
                className="aligned-input"
              >
                {generateTimeOptions().map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email do Responsável"
              name="responsible"
              multiline
              maxRows={4}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nome do Evento"
              name="eventName"
              multiline
              maxRows={4}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="EDV"
              name="edv"
              required
              minRows={3}
              placeholder="Digite seu EDV"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              name="description"
              required
              minRows={3}
              placeholder="Digite a descrição do evento..."
              style={{ width: "100%" }}
            />
          </Grid>
         
          </Grid>
          <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: "16px", alignSelf: "flex-end" }}
              >
                AGENDAR
              </Button>
            </Grid>
        </form>
      </div>
    </Modal>
  );
};

export const url = "https://glowing-parakeet-vjgxwpqgrp4hw45x-8000.app.github.dev";


function AgendarPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState("07:30");
  const [endTime, setEndTime] = useState("17:00");
  const [selectedStartDate, setSelectedStartDate] = useState(new Date()); // Correção aqui
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());     // Correção aqui
  const [eventos, setEventos] = useState([]);
  
  useEffect(() => {
    fetchEventos();
  }, []);
  
  const fetchEventos = async () => {
    try {
      const response = await axios.get(`${url}/evento/?format=json`);
      setEventos(response.data);
    } catch (error) {
      console.error("Erro ao buscar Eventos:", error);
    }
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    

    const formData = new FormData(event.target);
    const eventData = {
      nome_responsavel: formData.get("NomeResponsavel"),//
      nome_evento: formData.get("eventName"),//
      edv_cliente: formData.get("edv"),//
      email: formData.get("responsible"),
      descricao: formData.get("description"),//
      data_fim: formData.get("datainicio"), //
      data_inicio: formData.get("datafim"),//
      hora_inicio: formData.get("startTime"),
      hora_fim: formData.get("endTime"),//
   
    };
    
    try {
      await axios.post(`${url}/evento/`, eventData);
      fetchEventos();
      // Swal.fire({
      //   icon: "success",
      //   title: "Sucesso!",
      //   text: "Evento agendado com sucesso!",
      //   timer: 2000,
      //   timerProgressBar: true,
      // });
    } catch (error) {
      console.error("Erro ao enviar Evento:", error);
      // Swal.fire({
      //   icon: "error",
      //   title: "Erro!",
      //   text: "Houve um erro ao agendar o evento. Tente novamente mais tarde.",
      // });
    }
  };

  const handleDateClick = (value) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (value.getDay() === 6 || value.getDay() === 0 || value < currentDate) {
      return;
    }

    setSelectedDate(value);
    setShowForm(true);
  };


  const handleCloseForm = () => {
    setShowForm(false);
  };
    
  return (
    <div className="calendar-container">
      <h1>ETS ROOM</h1>
      <Calendar
        prev2Label={null}
        next2Label={null}
        prevLabel={<MdKeyboardArrowLeft style={{ fontSize: "40px", color: "#71767C" }} />}
        nextLabel={<MdKeyboardArrowRight style={{ fontSize: "40px", color: "#71767C" }} />}
        onChange={handleDateClick}
        value={selectedDate}
        className="custom-calendar"
        tileDisabled={({ date }) => date.getFullYear() !== 2023}
      />
      <EventFormModal
        showForm={showForm}
        onClose={handleCloseForm}
        handleFormSubmit={handleFormSubmit}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default function Agendar() {
  return (
    <main>
      <ButtonAdmin/>
      <ButtomDownload/>
      <AgendarPage />
      <DetalheEvento/>     
    </main>
  );
}
