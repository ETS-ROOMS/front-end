import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <div>
          <img
            className="w-full h-1 flex justify-center items-center object-cover"
            src="../../../public/line-bosch.png"
            alt="Line Bosch"
          />
        </div>
        <div className="w-full h-16 flex justify-center items-center shadow-md">
          <nav className="w-11/12 h-full flex justify-between items-center">
            <a href="/">
              <img
                className="w-36"
                src="../../../public/ets-roomLogo.png"
                alt="Logo BOSCH"
              />
            </a>
            <ul className="flex text-black">
              <li className="p-4">
                <a className="text-lg hover:border-b-2 border-b-black" href="/">
                  Home
                </a>
              </li>
              <li className="p-4">
                <a className="text-lg hover:border-b-2 border-b-black" href="/">
                  Ver mapa geral
                </a>
              </li>
              <li className="p-4">
                <a className="text-lg hover:border-b-2 border-b-black" href="/">
                  Resumo de hoje
                </a>
              </li>
              <li className="p-4">
                <a className="text-lg hover:border-b-2 border-b-black" href="/">
                  Painel de controle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
