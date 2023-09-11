import React, { useState } from "react";
import AddIcon from "../../components-icons/AddIcon";
import DeleteIcon from "../../components-icons/DeleteIcon";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputEventList(props) {
  const [event, setEvent] = useState<string>("");
  const [eventList, setEventList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(event.target.value);
  };

  const handleAddEvent = () => {
    if (event.trim() !== "") {
      if (eventList.includes(event)) {
        toast.error("O evento ou materia já existente!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setEventList([...eventList, event]);
        setEvent("");
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddEvent();
    }
  };

  const handleDeleteEvent = (index: number) => {
    const updatedEventList = eventList.filter((_, idx) => idx !== index);
    setEventList(updatedEventList);
  };

  return (
    <>
      <div className="w-full h-1/2 bg-white border-2 border-gray-400 rounded drop-shadow-md hover:border-gray-500">
        <div className="flex flex-row">
          <input
            className="w-5/6 h-12 pl-3 outline-none text-sm"
            type="text"
            value={event}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            maxLength={25}
            placeholder={props.placeholder}
          />
          <button
            className="w-1/5 h-12 cursor-pointer flex justify-center items-center"
            onClick={handleAddEvent}
          >
            <AddIcon size={20} />
          </button>
        </div>
        <div className="w-full h-4/6 bg-gray-200 overflow-y-scroll ">
          <div className="flex justify-center p-3 flex-col gap-3">
            {eventList.map((evt, index) => (
              <div
                className="w-[94%] h-8 text-sm pl-2 rounded flex justify-between items-center bg-white"
                key={index}
              >
                {evt}
                <button
                  className="w-10 h-8 p-4 cursor-pointer bg-gray-200 border-gray-400 "
                  onClick={() => handleDeleteEvent(index)}
                >
                  <DeleteIcon size={24} color="#ED0007" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
