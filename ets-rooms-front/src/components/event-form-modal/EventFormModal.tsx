import React, { useState } from "react";
import { Modal, Button, TextField, Select, MenuItem, Grid, InputLabel, Autocomplete, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

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

    const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);

    const handleCancelConfirmation = () => {
        setIsConfirmationDialogOpen(false);
    };

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
                                    <TextField {...params} label="Nome do Responsável" name="NomeResponsavel" required />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel style={{ marginTop: "16px" }}>* Início</InputLabel>
                            <TextField
                                type="date"
                                name="datainicio"
                                defaultValue=""
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
                            <InputLabel htmlFor="start-input">Horário de início</InputLabel>
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
                            <InputLabel htmlFor="end-input">Horário de término</InputLabel>
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
                                label="Email do Responsável"
                                name="responsible"
                                multiline
                                maxRows={4}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Descrição"
                                name="description"
                                minRows={3}
                                placeholder="Digite a descrição do evento..."
                                style={{ width: "100%" }}
                            />
                        </Grid>
                        <div className="w-full text-center pt-4">
                            <div className="flex justify-between items-center pl-4">
                                <Button
                                    variant="outlined"
                                    onClick={() => setIsConfirmationDialogOpen(true)}
                                    style={{
                                        color: "black",
                                        border: "none",
                                    }}
                                    className="text-black w-40 "
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    className="w-40"
                                >
                                    AGENDAR
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </form>
                <Dialog
                    open={isConfirmationDialogOpen}
                    onClose={() => setIsConfirmationDialogOpen(false)}
                >
                    <DialogTitle>Cancelar Agendamento</DialogTitle>
                    <DialogContent>
                        <p>Você tem certeza que deseja cancelar? Suas informações serão perdidas!</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsConfirmationDialogOpen(false)} color="primary">
                            Não
                        </Button>
                        <Button onClick={() => {
                            setIsConfirmationDialogOpen(false);
                            onClose();
                        }} color="secondary">
                            Sim, Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Modal>
    );
};

export default EventFormModal;
