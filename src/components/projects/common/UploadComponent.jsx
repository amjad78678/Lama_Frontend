import React, { useState } from "react";
import Backdrop from "../../common/Backdrop";
import ReactDOM from "react-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import {
  deleteFile,
  getProjectData,
  getProjectFiles,
} from "../../../api/server";
import MediaCard from "./MediaCard";
import LinkModalUpload from "./LinkModalUpload";

const UploadComponent = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState("");
  const [platformImg, setPlatformImg] = useState("");
  const { projectId } = useParams();
  const handleUploadLink = (platform, img) => {
    setModalPlatform(platform);
    setPlatformImg(img);
    setIsUploadModalOpen(true);
  };

  const {
    isPending,
    data: projectFiles,
    refetch,
  } = useQuery({
    queryKey: ["fetchProjectFiles"],
    queryFn: () => getProjectFiles(projectId),
  });

  const { isLoading, data: projectData } = useQuery({
    queryKey: ["fetchProjectDataInUpload"],
    queryFn: () => getProjectData(projectId),
  });

  const { mutate: deleteFileMutate } = useMutation({
    mutationFn: deleteFile,
    onSuccess: (res) => {
      if (res.data.success) {
        Swal.fire("Deleted!", res.data.message, "success");
        refetch();
      }
    },
  });

  const handleDeleteFile = (fileId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFileMutate({
          fileId: fileId,
        });
      }
    });
  };

  return (
    <>
      <div className="overflow-hidden">
        <h1 className="text-4xl text-purple font-bold my-8">
          {projectData?.data?.project.projectName}
        </h1>

        <div className="md:grid grid-cols-3 gap-4 ">
          <MediaCard
            {...{
              image: "/Frame 1.png",
              text: "Upload",
              platform: "Youtube Video",
              handleUploadLink,
            }}
          />
          <MediaCard
            {...{
              image: "/Frame 2.png",
              text: "Upload",
              platform: "Spotify Podcast",
              handleUploadLink,
            }}
          />
          <MediaCard
            {...{
              image: "/Rss_Feed.png",
              text: "Upload from",
              platform: "RSS Feed",
              handleUploadLink,
            }}
          />
        </div>

        {projectFiles?.data.files?.length > 0 && (
          <>
            <div className="bg-purple w-full h-14 rounded-lg mt-4 flex justify-start items-center">
              <div className="flex flex-grow justify-between  items-center mx-5">
                <h1 className="text-xs md:text-xl text-white ">
                  All files are processed! Your widget is ready to go!
                </h1>
                <button className="hidden md:block bg-white text-black md:px-5 md:py-2 rounded-lg font-semibold">
                  Try it out!
                </button>
                <button className="whitespace-nowrap md:hidden block bg-white text-black text-xs px-2  py-2 rounded-lg font-semibold">
                  Try it!
                </button>
              </div>
            </div>
            <div className="border rounded-xl my-6 overflow-x-scroll">
              <table className="w-full ">
                <thead>
                  <tr className="text-center border-b">
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Upload Date & Time</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projectFiles?.data.files?.map((file) => (
                    <tr key={file._id} className="text-center border-b">
                      <td className="px-4 py-4">{file.fileName}</td>
                      <td className="px-4 py-4">
                        {new Date(file.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-4">Done</td>
                      <td className="px-4 py-4 flex justify-center gap-1 md:gap-0">
                        <Link
                          to={`/projects/transcript/${file.projectId}/${file._id}`}
                        >
                          <button className="hidden md:block text-black border p-2 rounded-l-md md:w-[5vw]">
                            Edit
                          </button>
                          <button className="block md:hidden text-black border p-2 rounded-l-md md:w-[5vw]">
                            <MdEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteFile(file._id)}
                          className="hidden md:block text-red-500 border p-2 rounded-r-md md:w-[5vw]"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleDeleteFile(file._id)}
                          className="block md:hidden text-red-500 border p-2 rounded-r-md md:w-[5vw]"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      {isUploadModalOpen && (
        <>
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}

          {ReactDOM.createPortal(
            <div className="fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[80vh] w-full flex items-center justify-center z-10">
              <LinkModalUpload
                {...{
                  isUploadModalOpen,
                  setIsUploadModalOpen,
                  modalPlatform,
                  platformImg,
                  refetch,
                }}
              />
            </div>,
            document.getElementById("root-modal")
          )}
        </>
      )}
    </>
  );
};

export default UploadComponent;
