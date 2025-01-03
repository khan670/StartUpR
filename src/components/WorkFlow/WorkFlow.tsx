import React from "react";
import { WorkFlowData } from "../../data/WorkFlow";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
const WorkFlow: React.FC = () => {
  return (
    <section className="my-20 relative" id="workflow">
      <img src="/blob.svg" alt="" className="absolute top-0 right-0 w-full" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transform: "translateY(20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="flex justify-center flex-col items-center gap-2  text-center relative z-30"
      >
        <h3 className="text-sm text-color-theme font-semibold">WORKFLOW</h3>
        <SectionHeading
          text=" People don’t buy what you do, they buy why you do it."
          className="md:w-2/3 w-full px-3 md:px-0 -mt-2"
        />
        <img src="/divider.png" alt="" className="mt-2" />
      </motion.div>
      <div className="flex justify-evenly sm:flex-row flex-col gap-7 sm:gap-0 items-center mt-10 relative z-20">
        {WorkFlowData.map((item, index) => {
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
              className={`flex flex-col items-center text-center gap-1 ${
                index === 1 || index === 3 ? "sm:relative top-12" : ""
              }`}
              key={index}
            >
              <div
                className="p-4 rounded-full relative overflow-hidden shadow-custom-shadow"
                style={{
                  backgroundColor: `${item.color}`,
                }}
              >
                <span className="absolute top-1  -right-1 inline-block text-white opacity-30 font-bold text-7xl">
                  {item.number}
                </span>
                <Icon className="text-white relative z-30" size={50} />
              </div>
              <span className="inline-block  text-base text-color-body font-bold text-center">
                {item.heading}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkFlow;
