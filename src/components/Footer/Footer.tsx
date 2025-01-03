import React from "react";
import InputField from "../InputField";
import { IoIosSend } from "react-icons/io";
import { FooterData } from "../../data/Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import Logo from "../Logo";
import SectionHeading from "../SectionHeading";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-color-footer sm:py-32 py-20">
      <img src="/waves-top.png" alt="" className="w-full absolute top-0" />
      <img
        src="/waves-bottom.png"
        alt=""
        className="w-full absolute bottom-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transform: "translateY(20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.7, delay: 0.5 },
        }}
        className="relative z-30 "
      >
        <h3 className="text-sm text-color-theme font-medium text-center ">
          Newsletter
        </h3>
        <SectionHeading
          className="text-center"
          text="Subscribe Company Newsletter"
        />
        <form
          action=""
          className="flex justify-center sm:flex-row flex-col items-center gap-5 mt-10"
        >
          <InputField type="text" placeholder="Full Name" />
          <InputField type="email" placeholder="Email Address" />
          <button className="bg-color-theme sm:px-3 px-2 sm:py-3 py-2 rounded-full hover:bg-color-body transition-all text-white">
            <IoIosSend className="sm:text-3xl text-2xl" />
          </button>
        </form>
        <div className="flex justify-evenly sm:flex-row flex-col sm:px-0 px-5 mx-auto mt-20">
          {FooterData.map((value) => (
            <div className="sm:mt-0 mt-4 ">
              <h2 className="sm:text-lg text-sm font-semibold text-color-body ">
                {value.heading}
              </h2>
              <ul className="mt-3 flex flex-col gap-4">
                {value.links.map((item) => (
                  <li className="sm:text-sm text-xs hover:text-color-theme transition-all text-color-text">
                    <a href={item.url}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-lg font-semibold text-color-body ">
              Follow Us
            </h2>
            <div className="relative -left-2">
              <span className="hover:bg-color-body p-2 cursor-pointer transition-all inline-block rounded-full hover:text-white text-color-text">
                <FaFacebookF size={15} />
              </span>
              <span className="hover:bg-color-body p-2 inline-block rounded-full cursor-pointer transition-all hover:text-white text-color-text">
                <LuGithub size={18} />
              </span>
              <span className="hover:bg-color-body p-2 cursor-pointer transition-all inline-block rounded-full hover:text-white text-color-text">
                <FaLinkedinIn size={18} />
              </span>
              <span className="hover:bg-color-body p-2 inline-block rounded-full cursor-pointer transition-all hover:text-white text-color-text">
                <FaInstagram size={18} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="text-center mt-20">
        <Logo />
        <p className="mt-3 text-sm">
          © 2025 <span className="text-color-theme">StartUpR.</span> All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
