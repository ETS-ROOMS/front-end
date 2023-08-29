import React from "react";
import Period from "../../components/period/Period";
import ViewCardList from "../../components/view-card-list/ViewCardList";

export default function Home() {
  return (
    <main className="w-4/5 ml-auto mr-auto mt-8">
      <Period />
      <article className="grid grid-flow-col gap-8">
        <ViewCardList namePremise="Ca600 - ETS"/>
        <ViewCardList namePremise="Ca170 - ETS"/>
        <ViewCardList namePremise="Ca140 - ETS"/>
      </article>
    </main>
  );
}