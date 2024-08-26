import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { editFileDescription, getFileData } from "../../../api/server";
import { Input } from "postcss";
import toast from "react-hot-toast";

const TranscriptEdit = () => {
  const {
    isLoading,
    data: fileData,
    refetch,
  } = useQuery({
    queryKey: ["fileDataForProjects"],
    queryFn: () => getFileData(fileId),
  });
  const { fileId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(
    fileData?.data?.file?.description
  );

  console.log("iam file Data", fileData);

  const handleEditMode = () => {
    setDescription(fileData?.data?.file?.description);
    setEditMode(!editMode);
  };

  const { isPending, mutate: editMutate } = useMutation({
    mutationFn: editFileDescription,
    onSuccess: (res) => {
      if (res.data.success) {
        refetch();
        toast.success(res.data.message);
        setEditMode(false);
      }
    },
  });

  const handleSubmitEdit = () => {
    editMutate({ fileId, description });
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-4xl text-purple font-bold my-8">
          Edit Transcript
        </h1>

        {editMode && (
          <div className="flex gap-2">
            <button className="border border-red-500 rounded-lg px-1 py-1 md:px-6 md:py-2 font-bold text-red-500">
              Discard
            </button>
            <button
              onClick={handleSubmitEdit}
              className="border  rounded-lg px-1 py-1 md:px-4 md:py-2 font-bold text-white bg-black"
            >
              Save & exit
            </button>
          </div>
        )}
      </div>

      <div className="border border-purple rounded-lg p-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleEditMode}
            className="flex gap-1 justify-center items-center bg-gray-600 text-white px-3 py-2 rounded-full "
          >
            <MdEdit />
            <h1>Edit Mode</h1>
          </button>

          <IoSearchCircleOutline className="text-4xl text-purple" />
        </div>
        <div className="mx-2">
          <h1 className="text-2xl font-bold text-purple my-2">Speaker</h1>

          {editMode ? (
            <input
              type="text"
              className="w-full text-xl border rounded-lg py-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <p className="text-xl py-2">{fileData?.data?.file?.description}.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranscriptEdit;
