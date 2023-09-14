import React, { useState } from "react";
import axios from "axios";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputNameInstructor from "../inputs/InputNameInstructor";
import InputEventList from "../inputs/InputEventList";
import CircleInstructor from "../circle-instructor/CircleInstructor";
import Colorful from "../colorful/Colorful";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";

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

export default function ModalCadInstructors() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");
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
            <div className="w-full h-12 border-b border-gray-400">
              <h1 className="text-2xl font-normal">Cadastrar instrutor</h1>
            </div>
            <div className="w-full h-5/6 flex items-center ">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 ">
                <InputNameInstructor
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*Nome do instrutor"
                />
                <Input placeholder="*EDV" />
                <Input placeholder="*E-mail do instrutor" />
                <InputEventList placeholder="*Adicionar matéria ou evento" />
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full grid grid-cols-2">
                  <div>
                    <p className="text-gray-400 text-sm pb-1">Sua Cor:</p>
                    <CircleInstructor
                      colorInstructor={selectedColor}
                      nameInstructor={inputValue}
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">Mudar Cor:</p>
                    <Colorful
                      selectedColor={selectedColor}
                      onColorChange={handleColorChange}
                    />
                  </div>
                  <div className="grid col-span-2 pt-3">
                    <div className="w-full h-full flex flex-col justify-center">
                      <p className="text-gray-400 text-sm">Cores existentes</p>
                      <div className="flex pt-1 gap-3">
                        <CircleInstructor
                          colorInstructor="bg-pink-400"
                          nameInstructor="Agatha"
                        />
                        <CircleInstructor
                          colorInstructor="bg-gray-400"
                          nameInstructor="Camila"
                        />
                        <CircleInstructor
                          colorInstructor="bg-black"
                          nameInstructor="Cléber"
                        />
                        <CircleInstructor
                          colorInstructor="bg-orange-400"
                          nameInstructor="Croda"
                        />
                      </div>
                      <div className="flex pt-1 gap-3">
                        <CircleInstructor
                          colorInstructor="bg-yellow-400"
                          nameInstructor="Dani"
                        />
                        <CircleInstructor
                          colorInstructor="bg-blue-400"
                          nameInstructor="Dona"
                        />
                        <CircleInstructor
                          colorInstructor="bg-green-400"
                          nameInstructor="Francis"
                        />
                        <CircleInstructor
                          colorInstructor="bg-red-400"
                          nameInstructor="Ianella"
                        />
                      </div>
                      <div className="flex pt-1 gap-3">
                        <CircleInstructor
                          colorInstructor="bg-blue-100"
                          nameInstructor="Isadora"
                        />
                        <CircleInstructor
                          colorInstructor="bg-purple-800"
                          nameInstructor="Leonardo"
                        />
                        <CircleInstructor
                          colorInstructor="bg-blue-600"
                          nameInstructor="Luca"
                        />
                        <CircleInstructor
                          colorInstructor="bg-orange-100"
                          nameInstructor="Roberta"
                        />
                      </div>
                      <div className="flex pt-1 gap-3">
                        <CircleInstructor
                          colorInstructor="bg-neutral-500"
                          nameInstructor="Vanessa"
                        />
                        <CircleInstructor
                          colorInstructor="bg-emerald-400"
                          nameInstructor="Wilson"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-between pt-3">
                      <ButtonCancel nameButton="Cancelar" />
                      <ButtonConfirm nameButton="Cadastrar" />
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
}
