/* eslint-disable react/prop-types */
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import EmptyProjects from "./EmptyProjects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Home = ({ setIsLoginOpen, setIsCreateProjectOpen, projectData }) => {
  const { uLoggedIn } = useSelector((state) => state.userAuth);
  const handleCreateProject = () => {
    if (!uLoggedIn) {
      setIsLoginOpen(true);
    } else {
      setIsCreateProjectOpen(true);
    }
  };
  return (
    <div className="px-10">
      {projectData?.projects?.length === 0 || !uLoggedIn ? (
        <EmptyProjects handleCreateProject={handleCreateProject} />
      ) : (
        <div className="">
          <div className="flex justify-between mx-16  items-end mb-6">
            <h1 className="text-5xl font-semibold mt-8  text-purple">
              Projects
            </h1>

            <button
              onClick={handleCreateProject}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              <div className="flex gap-2 justify-center items-center">
                <FaCirclePlus className="text-3xl " />
                <h1 className="text-2xl font-bold">Create New Project</h1>
              </div>
            </button>
          </div>
          <div className="px-14 mt-4 grid grid-cols-3 gap-10 ">
            {projectData?.projects?.map((project) => (
              <Link to={`/projects/upload/${project._id}`} key={project._id}><ProjectCard  {...{ project }} /></Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
