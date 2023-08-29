import React from "react";

export default function Card() {
  return (
    <section className="w-5/6 h-1/3 rounded bg-white p-1 flex shadow-md">
      <div className="w-2 h-full rounded-s bg-purple-800"></div>
      {itemData.map((item) => (
        <div className="w-full h-full p-2 flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-medium">{item.labName}</h1>
            <p>{item.time}</p>
          </div>
          <div>
            <p className="text-sm font-normal space-y-1">
              Responsável: {item.responsible}
            </p>
          </div>
          <div className="classroom-name">
            <p className="text-sm font-light text-gray-700">{item.classroom}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

const itemData = [
  {
    labName: "Lab. 01",
    time: "07:30 - 11:30",
    responsible: "Leonardo Oliveira",
    classroom: "Aula de Java",
  },
];
