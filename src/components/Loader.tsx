import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 bg-white w-full h-full flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
