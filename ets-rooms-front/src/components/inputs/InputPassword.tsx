import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex w-11/12 ">
        <input
          className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100"
          type={showPassword ? "text" : "password"}
          placeholder={props.placeholder}
        />
        <button
          className="w-12 h-12"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <p>+</p> : <p>-</p>}
        </button>
      </div>
    </>
  );
}
