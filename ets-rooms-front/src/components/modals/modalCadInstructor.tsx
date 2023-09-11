import React, { useState } from "react";
import axios from "axios";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputNameInstructor from "../inputs/InputNameInstructor";
import InputEventList from "../inputs/InputEventList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 710,
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

export default function ModalCadInstructors() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedColor, setSelectedColor] = useState("#06F");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 border-b-2 border-gray-300">
              <h1 className="text-2xl font-normal">Cadastrar instrutor</h1>
            </div>
            <div className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-6 bg-amber-300">
                <InputNameInstructor
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*Nome do instrutor"
                />
                <Input placeholder="*EDV" />
                <Input placeholder="*E-mail do instrutor" />
                <InputEventList placeholder="*Adicionar matéria ou evento"/>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
