import React from "react";
import Projects from "../components/projects/Projects";
import NavSideBarContextProvider from "../store/context/NavSideBarContextProvider";

const ProjectsPage = () => {
  return (
    <div>
      <NavSideBarContextProvider>
        <Projects />
      </NavSideBarContextProvider>
    </div>
  );
};

export default ProjectsPage;
