import React from "react";

interface PropType {
  text: string;
  bgColor: string;
  hover: string;
}

const Button: React.FC<PropType> = ({ text, bgColor, hover }) => {
  return (
    <button
      className={`rounded-custom-radius ${bgColor} px-5 py-3 hover:${hover} transition-all   text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
