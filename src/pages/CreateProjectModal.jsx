import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { createProject } from "../api/server";
import toast from "react-hot-toast";

const CreateProjectModal = ({
  isCreateProjectOpen,
  setIsCreateProjectOpen,
  refetch,
}) => {
  const [projectName, setProjectName] = useState("");
  const { status, mutate: createProjectMutate } = useMutation({
    mutationFn: createProject,
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        setIsCreateProjectOpen(false);
        refetch();
      }
    },
  });

  const handleCreateProject = () => {
    createProjectMutate({ projectName: projectName });
  };

  return (
    <div className="relative w-8/12 bg-white rounded-lg">
      <div className="p-5 flex flex-col gap-6">
        <h1 className="text-xl font-bold">Create Project</h1>

        <div className="flex flex-col gap-2">
          <p>Enter Project Name:</p>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border border-gray-300 px-3 py-2"
            placeholder="Type here"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setIsCreateProjectOpen(false)}
            className="bg-white text-red-500 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateProject}
            className="bg-[#7E22CE] text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>

      <div
        onClick={() => setIsCreateProjectOpen(false)}
        className="absolute top-3 right-3"
      >
        <RxCross2 className="text-3xl text-[#7E22CE] cursor-pointer" />
      </div>
    </div>
  );
};

export default CreateProjectModal;
