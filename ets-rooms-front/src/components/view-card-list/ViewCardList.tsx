import React from "react";
import Card from "../card/Card";

export default function ViewCardList(props) {
  return (
    <article>
      <h1 className="w-80 h-16 text-center bg-slate-100 rounded-t-xl sticky text-2xl pt-4">
        {props.namePremise}
      </h1>
      <section className="w-80 h-96 rounded-b-xl bg-slate-100 flex items-center flex-col gap-5 overflow-y-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </article>
  );
}
