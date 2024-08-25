import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/server";
import { setUserLogout } from "../../store/slices/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { uLoggedIn, userDetails } = useSelector((state) => state.userAuth);
  const { isPending, mutate: logoutMutate } = useMutation({
    mutationFn: logout,
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUserLogout());
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="relative p-10">
      <div className=" flex justify-between items-center">
        <div>
          <div className="flex gap-2 justify-center items-center">
            <img className="h-8 md:h-full" src="./directright.png" alt="" />
            <img className="h-6 md:h-8" src="./LAMA.png" alt="" />
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 ">
          <IoSettingsOutline className="text-2xl md:text-3xl cursor-pointer" />
          <IoMdNotificationsOutline className="text-2xl md:text-3xl cursor-pointer" />
          {uLoggedIn && (
            <MdLogout
              onClick={() => logoutMutate({ email: userDetails.email })}
              className="text-2xl md:text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 md:left-28 top-28">
        <button className="flex justify-center items-center gap-2 border border-black rounded-xl px-3 py-1">
          <IoHomeOutline className="text-2xl" />
          <p>Back To Home</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
