import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="relative p-10">
      <div className=" flex justify-between items-center">
        <div>
          <div className="flex gap-2 justify-center items-center">
            <img src="./directright.png" alt="" />
            <img className="h-8" src="./LAMA.png" alt="" />
          </div>
        </div>

        <div className="flex gap-4">
          <IoSettingsOutline className="text-3xl" />
          <IoMdNotificationsOutline className="text-3xl" />
        </div>
      </div>
      <div className="absolute bottom-0 left-60 top-28">
        <button className="flex justify-center items-center gap-2 border border-black rounded-xl px-3 py-1">
          <IoHomeOutline className="text-2xl" />
          <p>Back To Home</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
