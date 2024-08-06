import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const Home = ({setIsLoginOpen}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen my-10">
        <h1 className="text-6xl font-bold text-[#7E22CE]">
          Create a New Project
        </h1>
        <img className="" src="./cuate.png" alt="" />
        <p className="text-xl text-center w-10/12 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>

        <button className="px-4 py-2 bg-black text-white rounded-lg mb-10">
          <div className="flex gap-2 justify-center items-center">
            <FaCirclePlus className="text-3xl " />
            <h1 onClick={()=>setIsLoginOpen(true)} className="text-2xl font-bold">Create New Project</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
