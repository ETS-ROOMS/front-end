import React from "react";

export default function CircleInstructor(props) {
  return (
    <>
      <section className="flex items-center">
        <div className={`${props.colorInstructor} w-4 h-4 rounded-full`}></div>
        <div className="p-1">
          <div className="text-sm text-black"><p>{props.nameInstructor}</p></div>
        </div>
      </section>
    </>
  );
}
