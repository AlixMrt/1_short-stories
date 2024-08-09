import React, { useRef } from "react";
import AddStoryForm from "../components/AddStoryForm";
import { Link } from "react-router-dom";

export default function Home() {
  const dialogRef = useRef(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  const closeButton = (
    <button className="button | back-button" onClick={toggleDialog}>
      &larr;
    </button>
  );

  return (
    <section className="home">
      <div className="hero">
        <h1 className="heading-1">
          This Website provides you with the most exquisite <br /> Short Stories
        </h1>
      </div>

      <div className="buttons-container">
        <Link className="button" onClick={toggleDialog}>
          Post a Story
        </Link>
        <Link to="/stories" className="button">
          Our Stories
        </Link>
      </div>

      <dialog
        className="dialog"
        ref={dialogRef}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
      >
        <AddStoryForm closeButton={closeButton} />
      </dialog>
    </section>
  );
}
