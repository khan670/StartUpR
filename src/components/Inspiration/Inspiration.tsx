import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
const Inspiration: React.FC = () => {
  return (
    <section className="mt-44 bg-[url('/map.png')] bg-no-repeat bg-center py-16 relative z-30 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transform: "translateY(20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.7, delay: 0.5 },
        }}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-center sm:text-5xl text-3xl text-color-body font-bold md:w-3/5 w-full leading-[1.3]">
          Let’s create creativity inspiration{" "}
          <span className="text-color-theme"> projects </span> together
        </h1>
        <div className="flex gap-5">
          <Button
            text="Request a Quote"
            bgColor="bg-color-body"
            hover="bg-color-theme"
          />
          <Button
            bgColor="bg-color-theme"
            hover="bg-color-body"
            text="Let's Talk"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Inspiration;
