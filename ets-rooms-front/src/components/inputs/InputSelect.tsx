import React from "react";

export default function InputSelect(props) {
  return (
    <>
      <select className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100">
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
    </>
  );
}
