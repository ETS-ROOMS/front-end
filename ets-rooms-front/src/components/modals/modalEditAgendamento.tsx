import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import InputNameInstructor from "../inputs/InputNameInstructor";

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

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%] hover:bg-yellow-400 transition-all ease-in-out">
            <div className="w-full h-12 bg border-b border-gray-400 hover:bg-blue-400 transition-all ease-in-out">
              <h1 className="text-2xl font-normal">Editar agendamento</h1>
            </div>
            <div className="w-full h-5/6 flex items-center hover:bg-red-400 transition-all ease-in-out">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 hover:bg-green-400 transition-all ease-in-out">
              <input className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100" disabled value="Leonardo" />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
