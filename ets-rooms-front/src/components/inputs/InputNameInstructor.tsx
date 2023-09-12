import React from "react";

export default function InputNameInstructor(props) {
  return (
    <>
      <input
        className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-sm border border-gray-500 hover:border-black focus:border-black"
        type="text"
        placeholder={props.placeholder}
        maxLength={20}
        value={props.inputValue}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </>
  );
}
