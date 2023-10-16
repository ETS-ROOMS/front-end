import React from "react";

export default function ButtonConfirm({nameButton, colorButton}) {
  return (
    <button className={`w-44 h-12 ${colorButton} text-white flex justify-center items-center text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none`}>
      {nameButton}
    </button>
  );
}