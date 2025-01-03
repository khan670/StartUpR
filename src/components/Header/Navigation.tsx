import React, { useState } from "react";
import Logo from "../Logo";
import { NavigationData } from "../../data/Navigation";
import Button from "../Button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navigation: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setIsScrolled(latest > 50);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`flex items-center gap-7 sm:p-7 p-5  z-50 ${
          isScrolled ? "bg-white shadow-md" : " bg-transparent "
        }  w-full z-30 fixed top-0 `}
      >
        <Logo />
        <ul className="lg:flex gap-4 hidden text-sm font-semibold text-color-body">
          {NavigationData.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:flex hidden items-center gap-4 ml-auto">
          <p
            className={`text-sm font-semibold   ${
              isScrolled ? "text-color-body" : "text-white"
            }`}
          >
            Contect Us +12 348.247.2548
          </p>
          <Button
            text="Let's Talk"
            bgColor="bg-color-theme"
            hover="bg-color-body"
          />
        </div>
        <RxHamburgerMenu
          className={`ml-auto lg:hidden  inline-block ${
            isScrolled ? "text-color-body" : "md:text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          size={30}
        />
      </motion.header>
      <div
        className={`w-2/3 transition-all duration-700 fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } bg-color-body h-full z-50`}
      >
        <RxCross1
          size={20}
          className="text-color-footer absolute top-2 right-2"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className="flex flex-col mt-8 gap-2 text-sm text-color-footer ">
          {NavigationData.map((item) => (
            <li
              onClick={() => setIsOpen(!isOpen)}
              key={item.id}
              className="border-b-[1px] border-b-color-footer font-semibold uppercase py-2 px-3"
            >
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <p
          className={`text-sm font-semibold px-3 py-2 mt-2 border-b-[1px] border-b-color-footer text-color-footer`}
        >
          Contect Us +12 348.247.2548
        </p>
        <Button
          text="Let's Talk"
          bgColor="bg-color-theme mx-3 my-2"
          hover="bg-color-body"
        />
      </div>
    </>
  );
};

export default Navigation;
