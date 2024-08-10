import React, { useState } from "react";
import General from "./General";
import Display from "./Display";
import Advanced from "./Advanced";
import { useQuery } from "@tanstack/react-query";
import { getWidgetConfiguration } from "../../../api/server";
import { useParams } from "react-router-dom";

const WidgetConfigurations = () => {
  const [selected, setSelected] = useState("general");
  const { projectId } = useParams();
  const textColor = (tab) => {
    return selected === tab
      ? "text-purple font-bold border-b-4 border-purple"
      : "text-black";
  };
  const {
    isLoading,
    data: widgetData,
    refetch,
  } = useQuery({
    queryKey: ["widgetConfigurations"],
    queryFn: () => getWidgetConfiguration(projectId),
  });

  console.log("widgetData", widgetData);

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
          {selected === "general" && (
            <General {...{ widget: widgetData?.data?.widget, refetch }} />
          )}
          {selected === "display" && (
            <Display
              {...{
                widget: widgetData?.data?.widget,
                refetch,
                iconUrl: widgetData?.data?.iconUrl,
              }}
            />
          )}
          {selected === "Advanced" && (
            <Advanced {...{ widget: widgetData?.data?.widget }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WidgetConfigurations;
