import React from "react";
import TechList from "../components/TechList";

export default function About() {
  return (
    <section className="about">
      <h1 className="heading-1">This website was made with those tools :</h1>

      <TechList />
      {/* <button className="button">My Portfolio</button> */}
    </section>
  );
}
