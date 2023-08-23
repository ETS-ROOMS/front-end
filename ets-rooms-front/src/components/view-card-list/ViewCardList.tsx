import React from "react";
import Card from "../card/Card";

export default function ViewCardList(props) {
  return (
    <>
      <div className="w-64 h-14 text-center rounded-t-lg bg-slate-100 sticky top-0">
        <h1 className="text-2xl font-light text-black">{props.namePremise}</h1>
      </div>
      <section className="w-64 h-96 rounded-b-lg flex items-center flex-col gap-5 overflow-y-scroll ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </>
  );
}
