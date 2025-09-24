import React from "react";
import "../styles/About.css";
import multiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us </h1>
        <p>We are a small pizzeria located in the heart of the city.</p>
      </div>
    </div>
  );
}

export default About;
