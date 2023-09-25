import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import Calendar from 'react-calendar'; // Importe os outros componentes necessários
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import EventFormModal from '../event-form-modal/EventFormModal';
import { API_URL } from '../../config';

export default function CalendarioSala({ sala }) {
    const [showForm, setShowForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState("07:30");
    const [endTime, setEndTime] = useState("17:00");
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetchEventos();
    }, []);

    const fetchEventos = async () => {
        try {
            const response = await axios.get(`${API_URL}/evento/?format=json`);
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
            nome_responsavel: formData.get("NomeResponsavel"),
            nome_evento: formData.get("eventName"),
            edv_cliente: formData.get("edv"),
            email: formData.get("responsible"),
            descricao: formData.get("description"),
            data_fim: formData.get("datainicio"),
            data_inicio: formData.get("datafim"),
            hora_inicio: formData.get("startTime"),
            hora_fim: formData.get("endTime"),

        };

        try {
            await axios.post(`${API_URL}/evento/`, eventData);
            fetchEventos();
        } catch (error) {
            console.error("Erro ao enviar Evento:", error);
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
        <div className="p-4">
            <div className="flex items-center space-x-48 ">
                <div className="">
                    <h1 className="font-bold">{sala.nome_sala}</h1>
                </div>
            </div>
            <Calendar
                className="rounded-lg shadow-md p-2 h-65"
                prev2Label={null}
                next2Label={null}
                prevLabel={<MdKeyboardArrowLeft className="text-4xl text-gray-500" />}
                nextLabel={<MdKeyboardArrowRight className="text-4xl text-gray-500" />}
                onChange={handleDateClick}
                value={selectedDate}
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