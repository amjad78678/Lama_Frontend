/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const firstName = project.projectName.substring(0, 2);
  return (
    <motion.div
      initial={{ scale: 0.8, y: 50, rotateX: -15 }}
      animate={{ scale: 1, y: 0, rotateX: 0 }}
      exit={{ scale: 0.8, y: 50, rotateX: 15 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.05,
        shadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      }}
    >
      <div className="grid grid-cols-12 gap-6 items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow-lg p-2">
        <div className="col-span-5 bg-purple w-full flex justify-center items-center rounded-lg">
          <div className="flex justify-center items-center py-4">
            <h1 className="font-bold text-6xl md:text-7xl text-center text-white">
              {firstName.toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flex flex-col col-span-7 justify-start gap-2 md:gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-purple">
              {project.projectName}
            </h1>
            <p>4 episodes</p>
          </div>
          <div>
            <p className="text-gray-500 text-start text-sm md:text-base">
              Last edited a week ago
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
