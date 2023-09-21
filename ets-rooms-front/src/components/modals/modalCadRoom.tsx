import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import PeopleIcon from "../../components-icons/PeopleIcon";
import RobotHead from "../../components-icons/RobotHead";
import DesktopIcon from "../../components-icons/DesktopIcon";
import DesktopApplication from "../../components-icons/DesktopApplication";

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

export default function ModalCadRoom() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%] hover:bg-yellow-400 transition-all ease-in-out">
            <div className="w-full h-12 bg border-b border-gray-400 hover:bg-blue-400 transition-all ease-in-out">
              <h1 className="text-2xl font-normal">Cadastrar sala</h1>
            </div>
            <div className="w-full h-5/6 flex items-center hover:bg-red-400 transition-all ease-in-out">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 hover:bg-green-400 transition-all ease-in-out">
                <Input placeholder="*Nome da sala" />
                <InputSelect placeholder="*Prédio da sala" />
                <Input placeholder="*Localização da sala" />
                <div className="w-full h-3/6 hover:bg-purple-400 transition-all ease-in-out">
                  <h1 className="text-gray-400 text-sm">
                    Preencha a seguir com as quantidades na sala:
                  </h1>
                  <div className="flex flex-col justify-between mt-4">
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-center gap-3">
                        <PeopleIcon size={30} color="#60a5fa" />
                        Lotação
                      </li>
                      <li className="flex items-center gap-3">
                        <DesktopApplication size={30} color="#60a5fa" />
                        Computador
                      </li>
                      <li className="flex items-center gap-3">
                        <RobotHead size={30} color="#60a5fa" />
                        Postos de robótica
                      </li>
                      <li className="flex items-center gap-3">
                        <DesktopIcon size={30} color="#60a5fa" />
                        Televisão
                      </li>
                      <li className="flex items-center gap-3">
                        <DesktopIcon size={30} color="#60a5fa" />
                        Quadro branco
                      </li>
                    </ul>
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
