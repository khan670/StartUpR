import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPlayCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import Button from "../Button";

const Hero: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/hero1-bg.png')",
          backgroundPosition: "top right",
        }}
        className="h-[110vh]  bg-cover"
      >
        <div
          style={{
            backgroundImage: "url('/hero2-bg.png')",
            backgroundPosition: "center center",
          }}
          className="h-full relative"
        >
          <div className="absolute top-1/2 left-20 w-1/3  transform  -translate-y-1/2">
            <motion.h1
              initial={{ transform: "translateX(100px)", opacity: 0 }}
              animate={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-6xl font-extrabold text-color-body leading-[1.2] "
            >
              Content is <span className="text-color-theme"> fire </span> Social
              media is <span className="text-color-theme"> gasoline. </span>
            </motion.h1>
            <motion.span
              initial={{ transform: "translateX(100px)", opacity: 0 }}
              animate={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block w-1/5 h-[2px] mt-8 bg-color-body"
            ></motion.span>
            <motion.p
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-color-text mt-8 leading-6"
            >
              In an age where everything and everyone is linked through networks
              of glass and air organization, government agency, country are an
              island. We need to do right by all our stakeholders.
            </motion.p>
            <motion.div
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 flex items-center gap-10"
            >
              <div
                className="
               relative 
               before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-red-100 before:rounded-full before:opacity-50 before:animate-scale-infinite 
               after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-red-50 after:rounded-full after:opacity-50 after:animate-scale-infinite-2 
               cursor-pointer
             "
              >
                <FaPlayCircle
                  className="text-color-theme relative z-40"
                  size={50}
                />
              </div>

              <Button
                text=" Start Project"
                bgColor="bg-color-body"
                hover="bg-color-theme "
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute flex items-center gap-3 bottom-3 right-32">
          <span className="hover:bg-color-theme p-2 cursor-pointer transition-all inline-block rounded-full hover:text-white text-color-text">
            <FaFacebookF size={18} />
          </span>
          <span className="hover:bg-color-theme p-2 inline-block rounded-full cursor-pointer transition-all hover:text-white text-color-text">
            <LuGithub size={18} />
          </span>
          <span className="hover:bg-color-theme p-2 cursor-pointer transition-all inline-block rounded-full hover:text-white text-color-text">
            <FaLinkedinIn size={18} />
          </span>
          <span className="hover:bg-color-theme p-2 inline-block rounded-full cursor-pointer transition-all hover:text-white text-color-text">
            <FaInstagram size={18} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
