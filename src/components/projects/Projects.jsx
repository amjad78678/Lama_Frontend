import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import ProjectSidebar from "./common/ProjectSidebar";
import ProjectNavbar from "./common/ProjectNavbar";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-12 min-h-screen">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:block col-span-3"
        >
          <ProjectSidebar />
        </motion.div>

        <motion.div
          className="col-span-9"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="p-10 h-[130vh] overflow-y-scroll no-scrollbar">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ProjectNavbar />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
