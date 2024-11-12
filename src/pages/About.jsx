import React from "react";
import AuthorList from "../components/AuthorList";

export default function About() {
  return (
    <section className="about">
      <h1 className="heading-1">Our favorite authors</h1>

      {/* <TechList /> */}
      <AuthorList />
      {/* <button className="button">My Portfolio</button> */}
    </section>
  );
}
