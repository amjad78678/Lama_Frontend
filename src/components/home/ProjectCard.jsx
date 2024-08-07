/* eslint-disable react/prop-types */
import React from "react";

const ProjectCard = ({ project }) => {
  const firstName = project.projectName.substring(0, 2);
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow-lg p-2">
        <div className="col-span-5 bg-purple w-full flex justify-center items-center rounded-lg">
          <div className="flex justify-center items-center py-4">
            <h1 className="font-bold text-7xl text-center text-white">
              {firstName.toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flex flex-col col-span-7 justify-start gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-purple">
              {project.projectName}
            </h1>
            <p>4 episodes</p>
          </div>
          <div>
            <p className="text-gray-500 text-start">Last edited a week ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
