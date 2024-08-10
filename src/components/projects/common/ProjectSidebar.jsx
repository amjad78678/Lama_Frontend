import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectSidebar = () => {
  const [selected, setSelected] = useState("Projects");
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = (name, url) => {
    setSelected(name);
    navigate(url);
  };

  const textColor = (tab) => {
    return selected === tab
      ? "bg-purple text-white"
      : "hover:bg-[#e1d8ed] text-black";
  };

  const logoColor = (tab) => {
    return selected === tab ? "bg-black" : "bg-[#cac1d4]";
  };

  return (
    <div className="col-span-3 flex flex-col bg-[#f4e8ff] p-5">
      <div>
        <div className="flex gap-2 justify-start items-center">
          <img className="h-10" src="/directright.png" alt="Direct Right" />
          <img className="h-6" src="/LAMA.png" alt="LAMA" />
        </div>
        <p className="px-2 my-6">Podcast Upload Flow</p>
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-2">
          <button
            onClick={() =>
              handleNavigate("Projects", `/projects/upload/${projectId}`)
            }
          >
            <div
              className={`${textColor(
                "Projects"
              )} rounded-full py-2 px-4 flex items-center space-x-4 w-full max-w-md`}
            >
              <div
                className={`${logoColor(
                  "Projects"
                )} rounded-full w-10 h-10 flex items-center justify-center`}
              >
                <span className="text-xl font-bold">1</span>
              </div>
              <span className="text-lg font-semibold">Projects</span>
            </div>
          </button>
          <Link to={`/projects/widget/${projectId}`}>
            <button
              onClick={() =>
                handleNavigate("Widget", `/projects/widget/${projectId}`)
              }
            >
              <div
                className={`${textColor(
                  "Widget"
                )} rounded-full py-2 px-4 flex items-center space-x-4 w-full max-w-md`}
              >
                <div
                  className={`${logoColor(
                    "Widget"
                  )} rounded-full w-10 h-10 flex items-center justify-center`}
                >
                  <span className="text-xl font-bold">2</span>
                </div>
                <span className="text-lg font-semibold whitespace-nowrap">
                  Widget Configurations
                </span>
              </div>
            </button>
          </Link>
          <button onClick={() => handleNavigate("Deployment")}>
            <div
              className={`${textColor(
                "Deployment"
              )} rounded-full py-2 px-4 flex items-center space-x-4 w-full max-w-md`}
            >
              <div
                className={`${logoColor(
                  "Deployment"
                )} rounded-full w-10 h-10 flex items-center justify-center`}
              >
                <span className="text-xl font-bold">3</span>
              </div>
              <span className="text-lg font-semibold">Deployment</span>
            </div>
          </button>
          <button onClick={() => handleNavigate("Pricing")}>
            <div
              className={`${textColor(
                "Pricing"
              )} rounded-full py-2 px-4 flex items-center space-x-4 w-full max-w-md`}
            >
              <div
                className={`${logoColor(
                  "Pricing"
                )} rounded-full w-10 h-10 flex items-center justify-center`}
              >
                <span className="text-xl font-bold">4</span>
              </div>
              <span className="text-lg font-semibold">Pricing</span>
            </div>
          </button>
        </div>

        <div className="border-t border-gray-400 w-full">
          <div
            onClick={() =>
              handleNavigate("Settings", `/projects/settings/${projectId}`)
            }
            className={`mt-auto ${textColor(
              "Settings"
            )} flex justify-start items-center gap-3 px-4 py-2 rounded-full mt-2`}
          >
            <span
              className={`${logoColor(
                "Settings"
              )} rounded-full w-10 h-10 flex items-center justify-center`}
            >
              <IoSettingsOutline className="text-3xl" />
            </span>
            <p className="text-xl text-center">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
