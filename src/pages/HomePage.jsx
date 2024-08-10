import React, { useState } from "react";
import Home from "../components/home/Home";
import Navbar from "../components/common/Navbar";
import Backdrop from "../components/common/Backdrop";
import ReactDOM from "react-dom";
import LoginModal from "../components/login/LoginModal";
import CreateProjectModal from "./CreateProjectModal";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/server";
import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const { uLoggedIn } = useSelector((state) => state.userAuth);

  const {
    isLoading,
    data: projectData,
    refetch,
  } = useQuery({
    queryKey: ["gettingProjectData"],
    queryFn: getProjects,
    enabled: uLoggedIn,
  });

  console.log("i am project data", projectData);

  return isLoading && !projectData ? (
    <Loader />
  ) : (
    <>
      <div>
        <Navbar />
        <Home
          {...{
            setIsLoginOpen,
            setIsCreateProjectOpen,
            projectData: projectData?.data,
          }}
        />
      </div>

      {isLoginOpen && (
        <>
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}

          {ReactDOM.createPortal(
            <div className="fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[80vh] w-full flex items-center justify-center z-10">
              <LoginModal {...{ isLoginOpen, setIsLoginOpen }} />
            </div>,
            document.getElementById("root-modal")
          )}
        </>
      )}
      {isCreateProjectOpen && (
        <>
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}

          {ReactDOM.createPortal(
            <div className="fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[80vh] w-full flex items-center justify-center z-10">
              <CreateProjectModal
                {...{ isCreateProjectOpen, setIsCreateProjectOpen, refetch }}
              />
            </div>,
            document.getElementById("root-modal")
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
