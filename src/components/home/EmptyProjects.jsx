import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { motion } from "framer-motion";

const EmptyProjects = ({ handleCreateProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6 md:gap-4 justify-center items-center min-h-screen md:my-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#7E22CE]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Create a New Project
        </motion.h1>

        <motion.img
          className=""
          src="./cuate.png"
          alt=""
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />

        <motion.p
          className="text-base md:text-xl text-center w-10/12 text-gray-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </motion.p>

        <motion.button
          onClick={handleCreateProject}
          className="px-4 py-2 bg-black text-white rounded-lg mb-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2 justify-center items-center">
            <FaCirclePlus className="text-3xl " />
            <h1 className="text-2xl font-bold">Create New Project</h1>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EmptyProjects;
