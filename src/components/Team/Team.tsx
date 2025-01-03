import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
const Team: React.FC = () => {
  return (
    <section
      className="sm:px-16 px-5 flex flex-col lg:flex-row gap-20  h-auto mt-20 "
      id="team"
    >
      <div className="relative bg-no-repeat lg:w-1/2 w-full">
        {/* Background Circle */}
        <img
          src="/shape-circle.png"
          alt="Background Circle"
          className="relative w-full h-full animate-rotateTyre"
        />

        {/* Center Profile */}
        <img
          src="/team1.png"
          alt="Central Profile"
          className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full sm:w-32 sm:h-32 w-20 h-20 object-cover shadow-lg"
        />

        {/* Outer Team Members */}
        <img
          src="/team2.png"
          alt="Team Member 1"
          className="absolute top-[20%] left-[5%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-500"
        />
        <img
          src="/team3.png"
          alt="Team Member 2"
          className="absolute top-[10%] right-[10%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-1000"
        />
        <img
          src="/team4.png"
          alt="Team Member 3"
          className="absolute bottom-[15%] left-[5%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-1100"
        />
        <img
          src="/team5.png"
          alt="Team Member 4"
          className="absolute bottom-[10%] right-[5%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-1000"
        />
        <img
          src="/team6.png"
          alt="Team Member 5"
          className="absolute top-[40%] left-[80%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-1500"
        />
        <img
          src="/team7.png"
          alt="Team Member 6"
          className="absolute bottom-[30%] right-[70%] rounded-full sm:w-20 sm:h-20 w-10 h-10 object-cover shadow-md animate-scaleUpDown delay-2000"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transform: "translateX(100px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { duration: 0.7, delay: 0.5 },
        }}
        className="lg:w-1/2 w-full  flex flex-col gap-5 items-start relative z-30"
      >
        <h3 className="text-color-theme text-xs font-medium flex gap-2 items-end ">
          OUR TEAM <img src="/divider.png" />
        </h3>

        <SectionHeading text="An essential aspect of creativity is not being afraid to fail." />
        <p className="text-sm text-color-text sm:w-3/4 w-full">
          Why money's in that office, right? If she start giving means some
          bullet about ain't there, and we got to go placing else and get it.
        </p>

        <Button
          text="Meet our team"
          bgColor="bg-color-theme"
          hover="bg-color-body"
        />
      </motion.div>
    </section>
  );
};

export default Team;
