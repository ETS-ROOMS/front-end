import React, { useState } from "react";

export default function ButtonCancel(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <button
      className="w-44 h-12 bg-white text-black flex justify-center items-center text-lg font-semibold rounded-lg hover:text-red-600"
      onClick={closeModal}
    >
      {props.nameButton}
    </button>
  );
}
