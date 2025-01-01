import React from "react";
import { ServicesData } from "../../data/Services";
import { motion } from "framer-motion";
const Services: React.FC = () => {
  return (
    <div className="flex justify-evenly gap-20 items-center px-16 mt-20 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transform: "translateY(20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="w-1/2 flex flex-col gap-6 items-start"
      >
        <h3 className="text-color-theme text-sm font-medium flex gap-1 items-center">
          OUR SERVICES <img src="/divider.png" alt="" />
        </h3>
        <h1 className="text-5xl leading-[1] text-color-body font-bold ">
          People don’t buy what you do, they buy why you do it.
        </h1>
        <p className=" text-color-text">
          Why money's in that office, right? If she start giving means some
          bullet about ain't there, and we got to go placing else and get it.
        </p>
        <button className=" rounded-custom-radius shadow bg-color-theme px-5 py-3 hover:bg-color-body transition-all   text-white">
          Our Services
        </button>
      </motion.div>
      <div className="w-1/2 grid grid-cols-2 gap-10">
        {ServicesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: { duration: 0.5, delay: 0.5 },
              }}
              key={index}
              className={`${
                index === 1 || index === 3 ? "relative top-12" : ""
              } flex flex-col items-center gap-3`}
            >
              <span
                style={{ backgroundColor: `#${item.color}` }}
                className={`inline-block px-5 py-5 text-white rounded-full text-3xl`}
              >
                <Icon size={30} />
              </span>
              <h2 className="text-xl text-color-body font-bold">
                {item.heading}
              </h2>
              <p className="text-base text-color-text text-center">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
