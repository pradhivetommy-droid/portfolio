import React from "react";
import "./info.css";
import RagulPic from "../assets/Ragul.jpg"; // Import background image correctly

export default function Info() {
  return (
    <section
      id="info"
      className="info-hero"
      style={{ backgroundImage: `url(${RagulPic})` }}  // Apply image here
    >
      <div className="info-overlay"></div>

      <div className="info-content">
        <h1 className="info-title">RAGUL</h1>

        <p className="info-description">
          A passionate AI developer building intelligent solutions that create real impact.
          Specializing in Python-based machine learning, backend systems, and automation,
          I turn complex data into meaningful results. Let’s bring innovative ideas
          to life through smart engineering.
        </p>
      </div>
    </section>
  );
}
