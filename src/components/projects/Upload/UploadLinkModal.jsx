import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { createFile } from "../../../api/server";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UploadLinkModal = ({
  isUploadModalOpen,
  setIsUploadModalOpen,
  modalPlatform,
  platformImg,
  refetch,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { status, mutate: createFileMutate } = useMutation({
    mutationFn: createFile,
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
        setIsUploadModalOpen(false);
      }
    },
  });
  const { projectId } = useParams();

  const handleUploadLink = () => {
    console.log(name, description);
    createFileMutate({ fileName: name, description, projectId: projectId });
  };

  return (
    <div className="relative w-8/12 bg-white rounded-lg">
      <div className="p-5 flex flex-col gap-6">
        <div className="flex gap-2 justify-start items-center">
          <img className="h-12" src={platformImg} alt="" />
          <h1 className="text-2xl font-bold">Upload from {modalPlatform}</h1>
        </div>

        <div className="flex flex-col gap-2">
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Type name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Type description"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={handleUploadLink}
            className="bg-black  text-white px-6 py-2  rounded-lg"
          >
            Save
          </button>
        </div>
      </div>

      <div
        onClick={() => setIsUploadModalOpen(false)}
        className="absolute top-3 right-3"
      >
        <RxCross2 className="text-3xl text-[#7E22CE] cursor-pointer" />
      </div>
    </div>
  );
};

export default UploadLinkModal;
