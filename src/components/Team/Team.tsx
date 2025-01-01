import React from "react";
import { motion } from "framer-motion";
const Team: React.FC = () => {
  return (
    <div className="px-16 flex gap-20  h-[90vh] mt-20 ">
      <div className="bg-no-repeat relative w-1/2">
        <img
          src="/shape-circle.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full animate-rotateTyre"
        />
        <img
          src="/team1.png"
          alt=""
          className="absolute z-20 top-[50px] right-0 animate-scaleUpDown delay-0"
        />
        <img
          src="/team2.png"
          alt=""
          className="absolute top-4 left-0 animate-scaleUpDown delay-500"
        />
        <img
          src="/team3.png"
          alt=""
          className="absolute bottom-4 right-0 animate-scaleUpDown delay-1000"
        />
        <img
          src="/team4.png"
          alt=""
          className="absolute top-4 left-1/2 animate-scaleUpDown delay-1100"
        />
        <img
          src="/team5.png"
          alt=""
          className="absolute bottom-4 left-1/2 animate-scaleUpDown delay-1000"
        />
        <img
          src="/team6.png"
          alt=""
          className="absolute z-20 bottom-[50px] left-0 animate-scaleUpDown delay-5000"
        />
        <img
          src="/team7.png"
          alt=""
          className="absolute top-52 right-52 animate-scaleUpDown delay-4000"
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
        className="w-1/2 mt-20 flex flex-col gap-10 items-start relative z-30"
      >
        <h3 className="text-color-theme text-xs font-medium flex gap-2 items-end ">
          OUR TEAM <img src="/divider.png" />
        </h3>
        <h1 className="text-4xl text-color-body font-bold w-3/4">
          An essential aspect of creativity is not being afraid to fail.
        </h1>
        <p className="text-sm text-color-text w-3/4">
          Why money's in that office, right? If she start giving means some
          bullet about ain't there, and we got to go placing else and get it.
        </p>
        <button className=" rounded-custom-radius shadow bg-color-theme px-5 py-4 hover:bg-color-body transition-all   text-white">
          Meet our team
        </button>
      </motion.div>
    </div>
  );
};

export default Team;
