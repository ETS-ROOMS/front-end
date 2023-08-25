import React from "react";
import Card from "../card/Card";

export default function ViewCardList(props) {
  return (
    <article>
      <div className="">
        <h1 className="text-2xl font-light text-black">{props.namePremise}</h1>
      </div>
      <section className="w-80 h-96 rounded-b-lg bg-slate-100 flex items-center flex-col gap-5 overflow-y-scroll ">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </article>
  );
}
