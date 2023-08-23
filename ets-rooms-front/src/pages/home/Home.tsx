import React from "react";
import Period from "../../components/period/Period";
import ViewCardList from "../../components/view-card-list/ViewCardList";

export default function Home() {
  return (
    <main className="w-5/6 ml-auto mr-auto mt-6">
      <Period />
      <article className="grid grid-cols-3 grid-rows-5 gap-4">
        <ViewCardList namePremise="Ca600 - ETS"/>
        <ViewCardList namePremise="Ca170 - ETS"/>
        <ViewCardList namePremise="Ca140 - ETS"/>
      </article>
    </main>
  );
}
