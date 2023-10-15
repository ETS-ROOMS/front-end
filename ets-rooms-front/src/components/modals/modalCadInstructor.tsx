import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
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

interface Instructor {
  nome: string;
  edv: string;
  email: string;
  cor: string;
  materias: string;
}

export default function ModalCadInstructors() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [inputValue, setInputValue] = useState("");
  const [existingInstructors, setExistingInstructors] = useState<Instructor[]>(
    []
  );
  const [existingColors, setExistingColors] = useState<string[]>([]); // New state for existing colors

  const [formData, setFormData] = useState<Instructor>({
    nome: "",
    edv: "",
    email: "",
    cor: "",
    materias: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleFormSubmit = async () => {
    if (
      formData.cor.trim() === "" ||
      formData.edv.trim() === "" ||
      formData.email.trim() === "" ||
      formData.materias.trim() === "" 
    ) {
      alert("Preencha todos os campos obrigatórios.");
    }
  
    try {
      const response = await axios.post(`${API_URL}/cad_instrutor/`, formData);
      console.log("Cadastro bem-sucedido", response.data);
      alert("Deu bom");
    } catch (error) {
      console.error("Erro ao cadastrar instrutor", error);
      alert("Deu ruim");
    }
  };

  useEffect(() => {
    // Fazer a solicitação GET à API Django aqui
    axios
      .get(`${API_URL}/cad_instrutor/`)
      .then((response) => {
        const instructors = response.data.results.map((instructor) => {
          return {
            cor: instructor.cor,
            nome: instructor.nome,
          };
        });

        const colors = instructors.map((instructor) => instructor.cor);

        setExistingInstructors(instructors);
        setExistingColors(colors);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  }, []);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 border-b border-gray-400">
              <h1 className="text-2xl font-normal">Cadastrar instrutor</h1>
            </div>
            <form className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4">
                <InputNameInstructor
                  inputValue={formData.nome}
                  onInputChange={(value) => handleInputChange("nome", value)}
                  placeholder="*Nome do instrutor"
                />
                <Input
                  inputValue={formData.edv}
                  onInputChange={(value) => handleInputChange("edv", value)}
                  placeholder="*EDV"
                />
                <Input
                  inputValue={formData.email}
                  onInputChange={(value) => handleInputChange("email", value)}
                  placeholder="*E-mail do instrutor"
                />
                <InputEventList
                  inputValue={formData.materias}
                  onInputChange={(value) =>
                    handleInputChange("materias", value)
                  }
                  placeholder="*Adicionar matéria ou evento"
                />
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full grid grid-cols-2">
                  <div>
                    <p className="text-gray-400 text-sm pb-1">Sua Cor:</p>
                    <div className="flex">
                      <CircleInstructor cor={selectedColor} nome={inputValue} />
                      <p>{formData.nome}</p>
                    </div>
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
                      <div className="h-40 flex flex-wrap pt-1 gap-2">
                        {existingInstructors.map((instructor, index) => (
                          <CircleInstructor
                            key={index}
                            cor={instructor.cor}
                            nome={instructor.nome}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-between pt-3">
                      <ButtonCancel
                        nameButton="Cancelar"
                        onClick={handleClose}
                      />
                      <ButtonConfirm
                        nameButton="Cadastrar"
                        onClick={handleFormSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}
