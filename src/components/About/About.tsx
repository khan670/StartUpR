import React from "react";
import { motion } from "framer-motion";
const About: React.FC = () => {
  return (
    <div className="px-10 flex gap-10">
      <div className="w-1/2 relative">
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "100%",
            opacity: 1,
          }}
          whileInView={{ opacity: 1, width: "0%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute w-full h-full bg-color-body  top-0 right-0"
        ></motion.div>
        <img src="/about1.png" alt="" />
      </div>
      <div
        className="bg-[url('/quote.png')] bg-no-repeat w-1/2 flex flex-col gap-5  "
        style={{ backgroundPosition: "left bottom" }}
      >
        <h2 className="text-color-theme uppercase text-sm font-medium flex gap-1 items-center">
          Company profile <img src="/divider.png" alt="" />
        </h2>
        <h1 className="text-5xl leading-[1.3] text-color-body font-bold ">
          Content marketing is a commitment, not a campaign
        </h1>
        <p className="text-base text-color-text leading-[1.6] ">
          Why money's in that office, right? If she start giving means some
          bullet about ain't there, and we got to go placing else and get it.
          Why not can money's in that office, right? If she start giving means
          some bullshit.
        </p>
        <h1 className="text-color-body font-medium ">
          <span className="inline-block w-[10%] h-[2px] mt-8 bg-color-theme"></span>{" "}
          Rayan khan,<span className="text-color-text ">StartUpR CEO</span>
        </h1>
        <img src="/signature.png" className="object-cover" width={400} alt="" />
      </div>
    </div>
  );
};

export default About;
