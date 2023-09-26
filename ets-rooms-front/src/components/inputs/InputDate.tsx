import React from "react";

export default function InputDate(props) {
  return (
    <>
      <input
        className={`${props.sizeW} ${props.sizeH} p-1 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100`}
        type="date"
      />
    </>
  );
}
