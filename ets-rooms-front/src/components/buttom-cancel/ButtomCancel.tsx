import React from "react";

export default function ButtomCancel(props) {
  return (
    <button className="w-48 h-12 bg-white text-black flex justify-center items-center text-lg font-semibold border border-black rounded-lg transition-colors hover:text-red-600 hover:border-red-600 hover:bg-white">
      {props.nameButtom}
    </button>
  );
}
