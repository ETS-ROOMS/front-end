import React from "react";

export default function InputNameInstructor(props) {
  return (
    <>
      <input
        className="w-full h-12 pl-3 border-2 border-gray-400 rounded outline-none drop-shadow-md text-sm hover:border-gray-500 focus:border-blue-400"
        type="text"
        placeholder={props.placeholder}
        maxLength={20}
        value={props.inputValue}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </>
  );
}
