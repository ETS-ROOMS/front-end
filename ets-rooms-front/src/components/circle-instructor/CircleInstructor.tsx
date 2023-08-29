import React from "react";

export default function CircleInstructor(props) {
  <section className="flex items-center">
    <div className={`${props.colorInstructor} w-4 h-4 rounded-full`}></div>
    <div className="p-1">
      <p className="text-sm text-black">{props.nameInstructor}</p>
    </div>
  </section>;
}
