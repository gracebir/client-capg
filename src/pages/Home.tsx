import React from "react";
import About from "../components/About";
import Activity from "../components/Activity";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <div className="container- max-w-7xl mx-auto text-primary">
        <NavBar />
        <Hero />
        <About />
        <Activity/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
