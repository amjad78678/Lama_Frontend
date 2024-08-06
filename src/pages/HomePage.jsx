import React, { useState } from "react";
import Home from "../components/home/Home";
import Navbar from "../components/common/Navbar";
import Backdrop from "../components/common/Backdrop";
import ReactDOM from "react-dom";
import LoginModal from "../components/login/LoginModal";

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar />
        <Home {...{ setIsLoginOpen }} />
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
    </>
  );
};

export default HomePage;
