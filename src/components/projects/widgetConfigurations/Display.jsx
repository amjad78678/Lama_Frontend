import React, { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { FiUpload } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addWidgetConfiguration } from "../../../api/server";
import toast from "react-hot-toast";
import Dropzone from "react-dropzone";
import SaveButton from "../../common/SaveButton";

const Display = ({ widget, refetch, iconUrl }) => {
  const { projectId } = useParams();
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(iconUrl || null);
  console.log("aim widget", widget, "pre", previewImage);

  console.log("iam file", file);
  const [widgetData, setWidgetData] = useState({
    projectId: projectId,
    primaryColor: "#000000",
    fontColor: "#000000",
    fontSize: 16,
    chatHeight: "50%",
    showSources: false,
    chatIconSize: "Medium",
    positionOnScreen: "Bottom Right",
    distanceFromBottom: 20,
    horizontalDistance: 20,
  });

  useEffect(() => {
    if (widget) {
      setWidgetData((prevData) => ({
        ...prevData,
        ...widget,
      }));
    }
  }, [widget]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWidgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleChange = (value) => {
    setWidgetData((prevData) => ({
      ...prevData,
      showSources: value,
    }));
  };

  const { isPending, mutate: addWidgetMutate } = useMutation({
    mutationFn: addWidgetConfiguration,
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDropFile = (file) => {
    setFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSaveData = () => {
    const formData = new FormData();

    Object.keys(widgetData).forEach((key) => {
      formData.append(key, widgetData[key]);
    });

    if (file) {
      formData.append("botIcon", file);
    }

    addWidgetMutate(formData);
  };

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
                  name="primaryColor"
                  value={widgetData.primaryColor}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                />
                <input
                  className={`border w-10 h-full rounded-lg`}
                  type="color"
                  name="primaryColor"
                  value={widgetData.primaryColor}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Font Size (in px)</h1>
              <div className="flex justify-between gap-2 h-10">
                <input
                  type="number"
                  name="fontSize"
                  value={widgetData.fontSize}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-1">Show Resources</h1>
              <ToggleButton
                value={widgetData.showSources}
                onChange={handleToggleChange}
                refetch={refetch}
              />
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
                  name="fontColor"
                  value={widgetData.fontColor}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                />
                <input
                  className="border w-10 h-full rounded-lg"
                  type="color"
                  name="fontColor"
                  value={widgetData.fontColor}
                  onChange={handleInputChange}
                />
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
                  name="chatHeight"
                  value={widgetData.chatHeight}
                  onChange={handleInputChange}
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

      <div className="py-5">
        <h1 className="font-bold text-lg text-purple mb-4">Chat Icon</h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Chat Icon Size</h1>
              <div className="flex justify-between gap-2 h-10">
                <select
                  name="chatIconSize"
                  value={widgetData.chatIconSize}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                >
                  <option value="Small (48x 48px)">Small (48x 48px)</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
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
                  type="number"
                  name="distanceFromBottom"
                  value={widgetData.distanceFromBottom}
                  onChange={handleInputChange}
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
                <div className="w-20 h-20 rounded-full border border-gray-400 flex justify-center items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={previewImage}
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Dropzone
                    onDrop={(acceptedFiles) => handleDropFile(acceptedFiles[0])}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <button
                            type="button"
                            className="flex gap-2 items-center bg-purple text-white px-4 py-2 rounded-lg font-bold"
                          >
                            <h1>Upload Image</h1>
                            <FiUpload />
                          </button>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <p className="text-xs">
                    {file?.path || "Recommended Size: 48x48px"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg mb-2">Position on Screen</h1>
              <div className="flex justify-between gap-2 h-10">
                <select
                  name="positionOnScreen"
                  value={widgetData.positionOnScreen}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                >
                  <option value="Bottom Right">Bottom Right</option>
                  <option value="Bottom Left">Bottom Left</option>
                  <option value="Top Right">Top Right</option>
                  <option value="Top Left">Top Left</option>
                </select>
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
                  type="number"
                  name="horizontalDistance"
                  value={widgetData.horizontalDistance}
                  onChange={handleInputChange}
                  className="border border-gray-400 w-full rounded-lg"
                />
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="mt-6">
              <SaveButton onClick={handleSaveData} isPending={isPending} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
