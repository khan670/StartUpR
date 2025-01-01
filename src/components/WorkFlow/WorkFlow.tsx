import React from "react";
import { WorkFlowData } from "../../data/WorkFlow";

const WorkFlow: React.FC = () => {
  return (
    <div className="my-20 relative" id="workflow">
      <img
        src="/blob.svg"
        alt=""
        className="absolute -top-52 -right-96 w-full"
      />
      <div className="flex justify-center flex-col items-center gap-2  text-center relative z-30">
        <h3 className="text-sm text-color-theme font-semibold">WORKFLOW</h3>
        <h1 className="text-5xl text-color-body font-bold -mt-2 w-2/3 ">
          People don’t buy what you do, they buy why you do it.
        </h1>
        <img src="/divider.png" alt="" className="mt-2" />
      </div>
      <div className="flex justify-evenly flex-wrap items-center mt-10 relative z-20">
        {WorkFlowData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className={`flex flex-col items-center text-center gap-1 ${
                index === 1 || index === 3 ? "relative top-12" : ""
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkFlow;
