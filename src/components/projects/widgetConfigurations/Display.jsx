import React from "react";
import ToggleButton from "./ToggleButton";
import { FiUpload } from "react-icons/fi";

const Display = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full border-b-4 pb-5">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Primary Color</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
                <input className="border w-10 h-full rounded-lg" type="color" />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Font Size (in px)</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-1">Show Resources</h1>

              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Font Color</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
                <input className="border w-10 h-full rounded-lg" type="color" />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">
                Chat Height (in % of total screen)
              </h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
                <input className="border w-10 h-full rounded-lg" type="color" />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="ms-auto my-auto">
              <ToggleButton />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <h1 className="font-bold text-lg text-purple mb-4">Chat Icon</h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Chat Icon Size</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">
                Distance from Bottom (in px)
              </h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="">
              <h1 className="font-bold text-lg mb-2">Bot Icon</h1>
              <div className="my-2 flex gap-4 items-center">
                <div className="w-20 h-20 rounded-full border border-gray-400">
                  <img src="" alt="" />
                </div>

                <div className="flex flex-col gap-2">
                  <button type="button" className="flex gap-2 items-center bg-purple text-white px-4 py-2 rounded-lg font-bold">
                    <h1>Upload Image</h1>
                    <FiUpload />
                  </button>
                  <p className="text-xs">Recommended Size: 48x48px</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Position on Screen</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">
                Horizontal Distance (in px)
              </h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
