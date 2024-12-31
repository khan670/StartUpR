import React from "react";
import Navigation from "./components/Header/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Services from "./components/Services/Services";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <div className="relative bg-[#FFF7F7] mt-5">
        <Product />
        <Services />
      </div>
    </>
  );
};

export default App;
