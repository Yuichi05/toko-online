import { Component } from "react";
import "./App.css";
import Header from "./component/Header/Header.js";
import Main from "./component/Main/Main.js";
import Footer from "./component/Footer/Footer.js";
import Hero from "./component/Hero/Hero.js";
// import imgProfile from "./component/prof.png";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Main />
      <Footer nama="Muhammad Yusuf" />
    </div>
  );
}

export default App;
