import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <div
        className={`relative w-14 h-7  rounded-full cursor-pointer transition-colors duration-300 ${
          isToggled ? "bg-purple" : "bg-gray-400"
        }`}
        onClick={toggleButton}
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full left-1 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
            isToggled ? "transform translate-x-7 " : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton;
