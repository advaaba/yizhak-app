import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contactForm" method="POST" action="https://formspree.io/f/mayvlrgy">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter full Name..." required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Email..." required />

            <label htmlFor="message">Message</label>
            <textarea rows="6"name="message" placeholder="Enter Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
