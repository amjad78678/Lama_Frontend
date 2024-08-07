import React, { useState } from "react";
import MediaCard from "./MediaCard";
import Backdrop from "../../common/Backdrop";
import UploadLinkModal from "./UploadLinkModal";
import ReactDOM from "react-dom";

const Upload = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState("");
  const [platformImg,setPlatformImg]=useState("")
  const handleUploadLink = (platform,img) => {
    setModalPlatform(platform);
    setPlatformImg(img)
    setIsUploadModalOpen(true);
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-purple font-bold my-8">Upload</h1>

        <div className="grid grid-cols-3 gap-4 ">
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
              onClick: () => setIsUploadModalOpen(true),
            }}
          />
          <MediaCard
            {...{
              image: "/Rss_Feed.png",
              text: "Upload from",
              platform: "RSS Feed",
              onClick: () => setIsUploadModalOpen(true),
            }}
          />
        </div>
      </div>
      {isUploadModalOpen && (
        <>
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}

          {ReactDOM.createPortal(
            <div className="fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[80vh] w-full flex items-center justify-center z-10">
              <UploadLinkModal
                {...{ isUploadModalOpen, setIsUploadModalOpen, modalPlatform, platformImg }}
              />
            </div>,
            document.getElementById("root-modal")
          )}
        </>
      )}
    </>
  );
};

export default Upload;
