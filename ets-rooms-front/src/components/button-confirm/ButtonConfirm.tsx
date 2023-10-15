import React from "react";

export default function ButtonConfirm({nameButton, onClick}) {
  return (
    <button className="w-44 h-12 bg-blue-500 text-white flex justify-center items-center text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none" onClick={onClick}>
      {nameButton}
    </button>
  );
}