import React from "react";

const MediaCard = ({image,text,platform,handleUploadLink}) => {
  return (
    <div onClick={()=>handleUploadLink(platform,image)} className="grid grid-cols-12 gap-6 items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow-lg p-2 cursor-pointer">
      <div className="col-span-4  w-full flex justify-center items-center rounded-lg my-2">
        <img className="h-14" src={image} alt="" />
      </div>
      <div className="flex flex-col col-span-8 justify-start gap-6">
        <div>
          <h1 className="text-xl font-semibold ">{text}</h1>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
