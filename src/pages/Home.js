import React from "react";    
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Background from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Background})` }}>
      <div className="headerContainer">
        <h1>Yizhak Pizza</h1>
        <p>Best pizza in town</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
