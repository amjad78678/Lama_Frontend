import React, { useState } from "react";
import General from "./General";
import Display from "./Display";
import Advanced from "./Advanced";

const WidgetConfigurations = () => {
  const [selected, setSelected] = useState("general");

  const textColor = (tab) => {
    return selected === tab
      ? "text-purple font-bold border-b-4 border-purple"
      : "text-black";
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl text-purple font-bold my-8">Configuration</h1>

        <div className="w-full flex gap-4 border-b-2">
          <h1
            onClick={() => setSelected("general")}
            className={`${textColor("general")} cursor-pointer text-xl pb-1`}
          >
            General
          </h1>
          <h1
            onClick={() => setSelected("display")}
            className={`${textColor("display")} cursor-pointer text-xl pb-1`}
          >
            Display
          </h1>
          <h1
            onClick={() => setSelected("Advanced")}
            className={`${textColor("Advanced")} cursor-pointer text-xl pb-1`}
          >
            Advanced
          </h1>
        </div>
        <div className="w-full my-6">
          {selected === "general" && <General />}
          {selected === "display" && <Display />}
          {selected === "Advanced" && <Advanced />}
        </div>
      </div>
    </div>
  );
};

export default WidgetConfigurations;
