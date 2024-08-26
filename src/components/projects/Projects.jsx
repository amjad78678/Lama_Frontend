import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import ProjectSidebar from "./common/ProjectSidebar";
import ProjectNavbar from "./common/ProjectNavbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/appSlice";

const Projects = () => {
  const { sidebarOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:grid grid-cols-12 min-h-screen">
        {/* Desktop sidebar */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`hidden md:block col-span-3`}
        >
          <ProjectSidebar />
        </motion.div>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-y-0 left-0 z-50 bg-white shadow-lg md:hidden"
            >
              <ProjectSidebar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay to close sidebar when clicking outside */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => dispatch(toggleSidebar())}
          />
        )}

        {/* Main content */}
        <motion.div
          className="md:col-span-9"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="p-5 md:h-[130vh] overflow-y-scroll no-scrollbar">
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
