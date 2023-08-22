import React from "react";

export default function ButtonConfirm(props) {
  return (
    <button className="w-48 h-12 bg-blue-500 text-white flex justify-center items-center text-base font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none">
      {props.nameButton}
    </button>
  );
}
