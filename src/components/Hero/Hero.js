import React from "react";
import heroBG from "../../assets/images/hero_bg1.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-container">
          <div className="hero-text">
            <p>Hi, my name is</p>
            <h2>CHASE OHLSON</h2>
            <h1>Freelance Web Developer in Los Angeles</h1>
            <button>GET IN TOUCH</button>
          </div>
          <div className="hero-bg-img">
            <img src={heroBG} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
