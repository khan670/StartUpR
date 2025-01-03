import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Navigation = lazy(() => import("./components/Header/Navigation"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Product = lazy(() => import("./components/Products/Product"));
const Services = lazy(() => import("./components/Services/Services"));
const Team = lazy(() => import("./components/Team/Team"));
const WorkFlow = lazy(() => import("./components/WorkFlow/WorkFlow"));
const Testimonial = lazy(() => import("./components/Testimonials/Testimonial"));
const Inspiration = lazy(() => import("./components/Inspiration/Inspiration"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <main>
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
          <Testimonial />
          <Inspiration />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
