import React, { useState } from "react";
import ProjectSidebar from "./common/ProjectSidebar";
import ProjectNavbar from "./common/ProjectNavbar";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen">
        <ProjectSidebar />

        <div className="col-span-9">
          <div className="p-10">
            <ProjectNavbar />
            <Outlet />
          </div>
        </div>
      </div>

      {}
    </div>
  );
};

export default Projects;
