import React, { Component } from "react";
import Header from "../src/component/Header";
import Logo from "../src/component/Logo";
import NavBar from "../src/component/NavBar";
import Hero from "../src/component/Hero";
import Body from "../src/component/Body";
import Footer from "../src/component/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Logo />
        <NavBar />
        <Hero />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
