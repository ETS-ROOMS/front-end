import React from "react";
import DateTimeDisplay from "../date-time-display/DateTimeDisplay";

export default function Period() {
  return (
    <section className="w-full">
      <article className="w-ful flex justify-between">
        <DateTimeDisplay />
        <div className="flex justify-between items-center ">
          <h2 className="text-lg pr-4">Período</h2>
          <nav className="w-52 h-10 ">
            <ul className=" bg-slate-200 h-full flex justify-center items-center text-sm rounded shadow-md gap-1">
              <li className=" h-5/6 flex justify-center items-center rounded bg-white shadow-md transition ease-in-out">
                <a
                  className="px-1 mx-2 hover: text-blue-500 active:text-blue-500"
                  href="#"
                >
                  Manhã
                </a>
              </li>
              <li className="h-5/6 flex justify-center items-center rounded hover:bg-white shadow-md transition ease-in-out">
                <a
                  className="px-1 mx-2 hover: text-blue-500 active:text-blue-500"
                  href="#"
                >
                  Tarde
                </a>
              </li>
              <li className="h-5/6 flex justify-center items-center rounded bg-white shadow-md transition ease-in-out">
                <a
                  className="px-1 mx-2 hover: text-blue-500 active:text-blue-500"
                  href="#"
                >
                  Ambos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </section>
  );
}
