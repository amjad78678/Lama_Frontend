import React from "react";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { MdOutlineNotifications } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectData } from "../../../api/server";
const ProjectNavbar = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  console.log("projectId", projectId);
  const { isLoading, data: projectData } = useQuery({
    queryKey: ["projectNavbar"],
    queryFn: () => getProjectData(projectId),
    enabled: projectId !== undefined,
  });
  const location = useLocation();
  let currentPath =
    location.pathname.split("/")[2].charAt(0).toUpperCase() +
    location.pathname.split("/")[2].slice(1);

  if (currentPath === "Widget") {
    currentPath = "Widget Configuration";
  } else if (currentPath === "Settings") {
    currentPath = "Account Settings";
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <Link to="/">
          <MdOutlineHome className="text-2xl md:text-4xl cursor-pointer" />
        </Link>
        <RxSlash className="text-2xl md:text-4xl cursor-pointer text-gray-400" />
        {currentPath !== "Settings" && (
          <>
            <p
              onClick={() => navigate(-1)}
              className="text-lg md:text-3xl text-gray-400"
            >
              {projectData?.data?.project.projectName}
            </p>
            <RxSlash className="text-2xl md:text-4xl cursor-pointer text-gray-400" />
          </>
        )}
        <p className="text-lg md:text-3xl text-purple">{currentPath}</p>
      </div>

      <div className="flex md:gap-6 justify-center items-center">
        <div className="flex gap-2">
          <p className="text-2xl md:text-3xl font-bold">EN</p>
          <img
            className="md:h-8"
            src="https://s3-alpha-sig.figma.com/img/61ba/d952/102357d8097692f48fbbb1903bb9299a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jK53tf5TSga9pi9fGFeNczS4lB7U9IOXmbvwsRPaMcibDbiOw4oJSX3eQQY0JuvITBGvJAH0ZzvELxcC-eQPHrLf6eUp-iuQGOCM9rGdoS0FVhtznLPu2795m5W30LBFqsCYYV63uRDcIrs62VZiUUdme-5boZnNi7muh9v1WGmd8B46lPCnEON0YL7Go3EzeWg4bz4~jXixq8-ls~RHw52g7hDcuyXX-4xUO~hC-gJ8unTPEfpxlYDiLR5ezZc1huHJH-jgIO5wjVj-UWQ4e2UmlVlcbte8CkEYJUmuM0pXXHzlkciHO5jp821oa6IT3roGBUEaqTWqmCwVEC9~-A__"
            alt=""
          />
        </div>
        <div>
          <MdOutlineNotifications className="text-2xl md:text-5xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProjectNavbar;
