import React from "react";
import { BeatLoader } from "react-spinners";

const SaveButton = ({ onClick, isPending }) => {

  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className={`
        mt-4 bg-purple px-6 rounded-lg font-bold text-white w-[8vw] py-2 text-xl
        relative transition-opacity duration-300
        ${isPending ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}
      `}
    >
      {isPending ? <BeatLoader size={8} color="#ffffff" /> : <span>Save</span>}
    </button>
  );
};

export default SaveButton;
