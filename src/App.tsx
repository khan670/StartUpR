import React from "react";
import Navigation from "./components/Header/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import WorkFlow from "./components/WorkFlow/WorkFlow";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <div className="relative bg-[#FFF7F7] my-5 py-10">
        <img src="/wave.svg" className="w-full absolute bottom-0" />
        <img
          src="/waveUp.svg"
          className="w-full absolute top-0 transform rotate-180"
        />
        <Product />
        <Services />
        <Team />
      </div>
      <WorkFlow />
    </>
  );
};

export default App;
