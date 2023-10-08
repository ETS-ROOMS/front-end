import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import PeopleIcon from "../../components-icons/PeopleIcon";
import RobotHead from "../../components-icons/RobotHead";
import DesktopIcon from "../../components-icons/DesktopIcon";
import DesktopApplication from "../../components-icons/DesktopApplication";
import Carousel from 'react-material-ui-carousel';
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import ButtonCancel from "../button-cancel/ButtonCancel";

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

const salaImages = ['/sala_verde1.png', '/sala_verde2.png'];

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
            <div className="w-full h-5/6 flex flex-row  hover:bg-red-400 transition-all ease-in-out">
              
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4 hover:bg-green-400 transition-all ease-in-out">
                <Input placeholder="*Nome da sala" />

                <Input placeholder="*Localização da sala" />
                <div className="w-full h-3/6 hover:bg-purple-400 transition-all ease-in-out  flex items-center">
                  <h1 className="text-gray-400 text-sm">
                    Preencha a seguir com as quantidades na sala:
                  </h1>
                  <div className="flex flex-col justify-between mt-4">
                    <ul className="flex flex-col">
                      <div className="w-2/3 h-full flex flex-col gap-2">
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <PeopleIcon size={30} color="#60a5fa" />
                            Lotação
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <h3 className="text-sm">17</h3>
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <DesktopApplication size={30} color="#60a5fa" />
                            Computador
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <h3 className="text-sm">17</h3>
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <RobotHead size={30} color="#60a5fa" />
                            Postos de robótica
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <h3 className="text-sm">00</h3>
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <DesktopIcon size={30} color="#60a5fa" />
                            Televisão
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <h3 className="text-sm">01</h3>
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <DesktopIcon size={30} color="#60a5fa" />
                            Quadro branco
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <h3 className="text-sm">02</h3>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              
              </div>
              {/* <Input className='w-1/5' placeholder="*Cadastre novas imagens da sala +" />
              <Carousel className='w-2/5 bg-pink-300'>
                {salaImages.map((image, index) => (
                  <img className='rounded-md' key={index} src={image} alt={`Imagem ${index + 1}`} />
                ))}
              </Carousel> */}
              <div className=" w-64 h-2/5 hover:bg-purple-200 transition-all ease-in-out  space-y-4 ">
              <Input className='w-64' placeholder="*Cadastre imagens da sala +" />
              <Carousel className='w-64 '>
                {salaImages.map((image, index) => (
                  <img className='rounded-md' key={index} src={image} alt={`Imagem ${index + 1}`} />
                ))}
              </Carousel>
            </div>
            </div>
            <div className="w-full h-full  flex justify-end pt-3">
                      <ButtonCancel nameButton="Cancelar" />
                      <ButtonConfirm nameButton="Cadastrar" />
                    </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
