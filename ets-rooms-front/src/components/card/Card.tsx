import React from "react";

export default function Card() {
  return (
    <section className="w-4/5 h-64 rounded bg-white p-1 flex shadow-md">
      <div>
        {itemData.map((item) => (
          <div className="w-4 h-full rounded-s-lg bg-black">
            <div className="classroom-infos">
              <div className="name-time">
                <h1>{item.labName}</h1>
                <p>{item.time}</p>
              </div>
              <div className="responsible-name">
                <p>Responsável: {item.responsible}</p>
              </div>
              <div className="classroom-name">
                <p>{item.classroom}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const itemData = [
  {
    labName: "Lab. 01",
    time: "07:30 - 11:30",
    responsible: "Leo Augusto",
    classroom: "Aula de Java",
  },
];
