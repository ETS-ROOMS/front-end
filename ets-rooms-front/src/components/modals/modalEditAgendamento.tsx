import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import InputDisable from "../inputs/InputDisable";
import TrashIcon from "../../components-icons/TrashIcon";
import DeleteAlert from "./alerts/DeleteAlert";

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

export default function ModalEditAgendamento() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");

  const testeLixeira = () => {
    alert("Deseja excluir este item?");
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%] hover:bg-yellow-400 transition-all ease-in-out">
            <div className="w-full h-12 bg border-b border-gray-400 hover:bg-blue-400 transition-all ease-in-out flex justify-between">
              <h1 className="text-2xl font-normal">Editar agendamento</h1>
              <button onClick={DeleteAlert}>
                <TrashIcon size={30} color="#000" />
              </button>
            </div>
            <div className="w-full h-5/6 flex items-center hover:bg-red-400 transition-all ease-in-out">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 hover:bg-green-400 transition-all ease-in-out">
                <InputDisable value="Leonardo" disabled />

                <Input
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*Select materia"
                />
                
                <Input
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*EDV ou senha"
                />

                <InputDisable value="Leonardo.Oliveira@br.bosch.com" disabled />

                <Input
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*Descrição"
                />
              </div>
            </div>
            <div className="w-full h-full flex justify-end pt-3">
              <ButtonCancel text-blue-600 nameButton="Cancelar" />
              <ButtonConfirm nameButton="Editar" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
