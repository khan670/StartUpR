import React from "react";
import Logo from "../Logo";
import { NavigationData } from "../../data/Navigation";
import Button from "../Button";

const Navigation: React.FC = () => {
  return (
    <header className="flex items-center gap-7 p-7 fixed w-full z-30">
      <Logo />
      <ul className="flex gap-4 text-sm font-semibold text-color-body">
        {NavigationData.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 ml-auto">
        <p className="text-sm font-semibold text-white">
          Contect Us +12 348.247.2548
        </p>
        <Button
          text="Let's Talk"
          bgColor="bg-color-theme"
          hover="bg-color-body"
        />
      </div>
    </header>
  );
};

export default Navigation;
