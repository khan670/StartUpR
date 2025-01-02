import React from "react";

interface PropType {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<PropType> = ({ text, className }) => {
  return (
    <h1
      className={`${className} text-5xl leading-[1.3] text-color-body font-bold `}
    >
      {text}
    </h1>
  );
};

export default SectionHeading;
