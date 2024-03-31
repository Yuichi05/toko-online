import React from "react";
import "./Hero.css";
import bg from "../pro2.svg";

const Hero = () => {
  return (
    <div className="container">
      <section className="hero" id="hero">
        <div className="hero-text">
          <span>Welcome to</span>
          <h1>Toko-Online</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo!</h2>
          <a href="#" className="btn">
            Explore
          </a>
        </div>
        <div className="hero-img">
          <img src={bg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;